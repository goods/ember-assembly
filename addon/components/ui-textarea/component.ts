import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import { isNone } from '@ember/utils';
import { set } from '@ember/object';
import { action } from '@ember/object';

export default class UiTextarea extends Component {
  layout = template;
  tagName: string = '';

  id?: string = this.elementId;
  value?: string = '';
  onChange?: Function | null = null;
  required?: boolean = false;
  disabled?: boolean = false;

  hasError?: boolean = false;

  @action
  onKeyUp(value: string) {
    if (isNone(this.onChange)) {
      return set(this, 'value', value);
    }
    return this.onChange(value, event);
  }
}
