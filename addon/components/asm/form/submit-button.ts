import Component from '@glimmer/component';

export interface AsmFormSubmitButtonSignature<T> {
  Element: HTMLLabelElement;
  Args: {
    label?: string;
  };
  Blocks: {
    default: [];
  };
}

export default class AsmFormSubmitButton<T> extends Component<
  AsmFormSubmitButtonSignature<T>
> {
  get label() {
    return this.args.label ?? 'Submit';
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Asm::Form::SubmitButton': typeof AsmFormSubmitButton;
  }
}
