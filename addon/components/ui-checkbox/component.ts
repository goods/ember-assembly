import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import { isNone } from '@ember/utils';

export default class UiCheckbox extends Component {
  layout = template;
  tagName: string = '';

  label?: string = '';

  checked?: boolean = false;
  onChange?: Function | null = null;

  click(event: any) {
    if (!isNone(this.onChange)) {
      this.onChange(!this.checked, event);
      return false;
    }
    return;
  }
}
