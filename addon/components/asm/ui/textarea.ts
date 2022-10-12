import Component from '@glimmer/component';
import { action } from '@ember/object';
import { isNone } from '@ember/utils';

export type Size = 'default';
export type Appearance = 'default' | 'strong';

interface AsmUiTextareaArgs {
  value: string;
  onUpdate?: Function | null;
  inputId?: string;
  required?: boolean;
  isDisabled?: boolean;
  hasError?: boolean;
}

export default class AsmUiTextarea extends Component<AsmUiTextareaArgs> {
  get required(): boolean {
    return this.args.required ?? false;
  }

  get isDisabled(): boolean {
    return this.args.isDisabled ?? false;
  }

  get hasError(): boolean {
    return this.args.hasError ?? false;
  }

  @action
  onUpdate(event: InputEvent) {
    //@ts-ignore
    let value = event.target?.value ?? '';
    if (!isNone(this.args.onUpdate)) {
      return this.args.onUpdate(value);
    }
  }
}
