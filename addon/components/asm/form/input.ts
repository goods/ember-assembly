import { action } from '@ember/object';
import Component from '@glimmer/component';

export interface AsmFormInputSignature<T> {
  Element: HTMLInputElement;
  Args: {
    label?: string;
    value?: any;
    type?: string;
    onUpdate?: (value: any) => void;
  };
  Blocks: {};
}

export default class AsmFormInput<T> extends Component<
  AsmFormInputSignature<T>
> {
  get type(): string {
    return this.args.type || 'text';
  }

  @action
  onUpdate(event: Event) {
    event.preventDefault();
    if (this.args.onUpdate) {
      this.args.onUpdate((event.target as HTMLInputElement).value);
    }
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Asm::Form::Input': typeof AsmFormInput;
  }
}
