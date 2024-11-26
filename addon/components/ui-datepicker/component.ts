import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import { Moment } from 'moment';
import { action, computed } from '@ember/object';
import { isNone } from '@ember/utils';
import { guidFor } from '@ember/object/internals';

export default class UiDatepicker extends Component {
  layout = template;
  tagName: string = '';

  selected: Moment[] = [];
  mode?: 'single' | 'multiple' | 'range' = 'multiple';
  center?: Moment | undefined = undefined;
  rangeStart?: Moment | undefined = undefined;
  rangeFinish?: Moment | undefined = undefined;
  placeholder: string = 'Select dates';

  onChangeSelection?: Function | null = null;
  onChangeRange?: Function | null = null;
  onChangeCenter?: Function | null = null;

  @computed()
  get assemblyId() {
    return guidFor(this);
  }

  @action
  onChangeDateSelection(onClose: Function, selected: Moment[]) {
    if (!isNone(this.onChangeSelection)) {
      this.onChangeSelection(selected);
    }

    if (this.mode == 'single') {
      onClose();
    }
  }

  @action
  onChangeDateRange(
    onClose: Function,
    rangeStart: Moment[],
    rangeFinish: Moment[]
  ) {
    if (!isNone(this.onChangeRange)) {
      this.onChangeRange(rangeStart, rangeFinish);
    }
    onClose();
  }

  init() {
    //@ts-ignore
    super.init(...arguments);
    this.registerDatepicker();
  }

  willDestroy() {
    //@ts-ignore
    super.willDestroy(...arguments);
    this.unregisterDatepicker();
  }

  private registerDatepicker() {
    if (window) {
      //@ts-ignore
      window.__assemblyComponents = window.__assemblyComponents || {};
      //@ts-ignore
      window.__assemblyComponents[this.assemblyId] = this;
    }
  }

  private unregisterDatepicker() {
    if (window) {
      //@ts-ignore
      delete window.__assemblyComponents[guidFor(this)];
    }
  }
}
