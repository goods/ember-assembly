import Component from '@glimmer/component';

export interface AsmFormLabelSignature<T> {
  Element: HTMLLabelElement;
  Args: {};
  Blocks: {
    default: [];
  };
}

export default class AsmFormLabel<T> extends Component<
  AsmFormLabelSignature<T>
> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Asm::Form::Label': typeof AsmFormLabel;
  }
}
