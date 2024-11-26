import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import { isNone } from '@ember/utils';
import { action } from '@ember/object';

export default class UiCheckbox extends Component {
  layout = template;
  tagName: string = '';

  label?: string = '';

  checked?: boolean = false;
  onChange?: Function | null = null;

  @action
  onClick(event: any) {
    if (!isNone(this.onChange)) {
      this.onChange(!this.checked, event);
      return false;
    }
    return;
  }
}
