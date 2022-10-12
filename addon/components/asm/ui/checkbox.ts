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

// label?: string = "";

//   @className("is-checked")
//   @localClassName("is-checked")
//   checked?: boolean = false;
//   onChange?: Function | null = null;

//   click(event: any) {
//     if (!isNone(this.onChange)) {
//       this.onChange(!this.checked, event);
//       return false;
//     }
//     return;
//   }
