import Component from '@glimmer/component';

export interface AsmFormButtonSignature<T> {
  Element: HTMLLabelElement;
  Args: {
    label: string;
  };
  Blocks: {
    default: [];
  };
}

export default class AsmFormButton<T> extends Component<
  AsmFormButtonSignature<T>
> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Asm::Form::Button': typeof AsmFormButton;
  }
}
