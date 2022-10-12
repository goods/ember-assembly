import Component from '@glimmer/component';
import { action } from '@ember/object';
import { isNone } from '@ember/utils';

interface AsmUiSearchInputArgs {
  value?: string;
  onChange?: (value: string) => void;
  isSearching?: boolean;
  inputId?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}

export default class AsmUiSearchInput extends Component<AsmUiSearchInputArgs> {
  get value(): string {
    return this.args.value ?? '';
  }

  get isSearching(): boolean {
    return this.args.isSearching ?? false;
  }

  @action
  onInput(event: InputEvent) {
    if (isNone(this.args.onChange)) {
      return;
    }
    //@ts-ignore
    let value = event.target?.value ?? '';
    return this.args.onChange(value);
  }
}
