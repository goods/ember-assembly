import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import { action } from '@ember/object';
import { isNone } from '@ember/utils';
import { set, computed } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { SafeString } from 'handlebars';

export default class UiTextInput extends Component {
  layout = template;
  tagName: string = '';

  value?: string = '';
  onSetValue?: Function | null = null;
  onFocusOut?: Function | null = null;
  inputId?: string = '';
  required?: boolean = false;
  type?: string = 'text';
  disabled?: boolean = false;
  max?: number | null = null;
  min?: number | null = null;
  width?: string = ''; //Accepts any standard CSS width value

  hasError?: boolean = false;

  @computed('width')
  get style(): SafeString {
    if (this.width) {
      return htmlSafe(`width: ${this.width}`);
    } else {
      return htmlSafe('');
    }
  }

  @action
  onKeyUp(value: string) {
    if (isNone(this.onSetValue)) {
      return set(this, 'value', value);
    }
    return this.onSetValue(value, event);
  }

  @action
  didFocusOut() {
    if (!isNone(this.onFocusOut)) {
      this.onFocusOut();
    }
  }
}
