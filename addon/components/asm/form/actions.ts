import Component from '@glimmer/component';

export interface AsmFormActionsSignature<T> {
  Element: HTMLLabelElement;
  Args: {};
  Blocks: {
    default: [];
  };
}

export default class AsmFormActions<T> extends Component<
  AsmFormActionsSignature<T>
> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Asm::Form::Actions': typeof AsmFormActions;
  }
}
