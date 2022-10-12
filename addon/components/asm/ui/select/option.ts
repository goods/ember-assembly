import Component from '@glimmer/component';
import { action } from '@ember/object';

interface AsmUiSelectOptionArgs {
  value: any;
  option: any;
  label?: string;
  labelPath?: string;
  optionComponent?: any;
  onChange: (value: any) => void;
  onClose: () => void;
}

export default class AsmUiSelectOption extends Component<AsmUiSelectOptionArgs> {
  @action
  onClick() {
    this.args.onChange(this.args.value);
    this.args.onClose();
  }
}
