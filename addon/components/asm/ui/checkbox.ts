import Component from '@glimmer/component';
import { action } from '@ember/object';
import { isNone } from '@ember/utils';

interface AsmUiCheckboxArgs {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean, event: PointerEvent) => void;
}

export default class AsmUiCheckbox extends Component<AsmUiCheckboxArgs> {
  @action
  onChange(event: PointerEvent) {
    if (!isNone(this.args.onChange)) {
      this.args.onChange(!this.args.checked, event);
      return false;
    }
    return;
  }
}
