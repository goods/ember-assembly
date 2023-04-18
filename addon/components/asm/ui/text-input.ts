import Component from '@glimmer/component';
/* @ts-ignore */
import { htmlSafe } from '@ember/string';
import { action } from '@ember/object';
import { isNone } from '@ember/utils';
import { SafeString } from 'handlebars';

export type Size = 'default';
export type Appearance = 'default' | 'strong';

interface AsmUiTextInputArgs {
  value: string;
  onUpdate?: Function | null;
  onFocusOut?: Function | null;
  inputId?: string;
  required?: boolean;
  type?: string;
  isDisabled?: boolean;
  max?: number | null;
  min?: number | null;
  width?: string; //Accepts any standard CSS width value
  hasError?: boolean;
}

export default class AsmUiTextInput extends Component<AsmUiTextInputArgs> {
  get required(): boolean {
    return this.args.required ?? false;
  }

  get type(): string {
    return this.args.type ?? 'text';
  }

  get isDisabled(): boolean {
    return this.args.isDisabled ?? false;
  }

  get hasError(): boolean {
    return this.args.hasError ?? false;
  }

  get style(): SafeString {
    if (this.args.width) {
      return htmlSafe(`width: ${this.args.width}`);
    } else {
      return htmlSafe('');
    }
  }

  @action
  onUpdate(event: InputEvent) {
    //@ts-ignore
    let value = event.target?.value ?? '';
    if (!isNone(this.args.onUpdate)) {
      return this.args.onUpdate(value);
    }
  }

  @action
  didFocusOut() {
    if (!isNone(this.args.onFocusOut)) {
      this.args.onFocusOut();
    }
  }
}
