import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';

export default class UiComboboxOption extends Component {
  layout = template;

  tagName: string = '';

  onSelect!: Function;
  onDeselect!: Function;
  value!: any;
  isSelected?: boolean = false;
  labelPath?: string = '';
  optionComponent?: any = null;

  click() {
    if (this.isSelected) {
      this.onDeselect(this.value);
    } else {
      this.onSelect(this.value);
    }
  }
}
