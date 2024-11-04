import Component from '@glimmer/component';

export interface AsmFormFieldSignature<T> {
  Element: HTMLDivElement;
  Args: {
    label?: string;
  };
  Blocks: {
    default: [];
  };
}

export default class AsmFormField<T> extends Component<
  AsmFormFieldSignature<T>
> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Asm::Form::Field': typeof AsmFormField;
  }
}
