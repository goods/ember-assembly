import { settled, click, find } from '@ember/test-helpers';
import { run } from '@ember/runloop';
import { assert } from '@ember/debug';
import moment from 'moment';

function findGuid(selector) {
  let target = find(selector);
  return target.attributes['data-assembly-id'].value;
}

function findComponentInstance(selector) {
  let guid = findGuid(selector);
  assert(`Could not find an element using selector: "${selector}"`, guid);
  return window.__assemblyComponents[guid];
}

export async function datepickerCenter(selector, moment) {
  let component = findComponentInstance(selector);
  let onChangeCenter = component.get('onChangeCenter');
  await run(() => onChangeCenter(moment));
  return settled();
}

export async function datepickerSelect(selector, selected) {
  let selectedMoment = moment(selected);
  let datepickerElement = find(selector);

  await click(`${selector} .ui-datepicker-trigger-button`);

  let daySelector = `${selector} [data-date="${selectedMoment.format(
    'YYYY-MM-DD'
  )}"]`;
  let dayElement = datepickerElement.querySelector(daySelector);
  if (!dayElement) {
    await datepickerCenter(selector, selectedMoment);
  }

  await click(daySelector);
  await click(`${selector} .ui-datepicker-trigger-button`);
  return settled();
}

export async function selectChooseIndex(path, index) {
  let select = document.querySelector(`${path}`);
  let trigger = document.querySelector(`${path} .ui-select-trigger button`);

  if (!trigger) {
    throw new Error(
      `You called "selectChoose('${path}', '${index}')" but no select was found using selector "${path}"`
    );
  }

  await click(trigger);

  let optionsClass = select.getAttribute('data-content-class');

  let option = document.querySelector(
    `.${optionsClass} .ui-select-option:nth-child(${index})`
  );

  if (!option) {
    throw new Error(` No options were found using selector "${optionsClass}"`);
  }

  await click(option);
  return settled();
}

export async function selectChoose(path, value) {
  let select = document.querySelector(`${path}`);
  let trigger = document.querySelector(`${path} .ui-select-trigger button`);

  if (!trigger) {
    throw new Error(
      `You called "selectChoose('${path}', '${value}')" but no select was found using selector "${path}"`
    );
  }

  await click(trigger);

  let optionsClass = select.getAttribute('data-content-class');

  let option = document.querySelector(
    `.${optionsClass} [data-value='${value}']`
  );

  if (!option) {
    throw new Error(` No options were found using selector "${optionsClass}"`);
  }

  await click(option);
  return settled();
}
