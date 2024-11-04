import Component from '@glimmer/component';

export interface AsmFormSignature<T> {
  Element: HTMLFormElement;
  Args: {
    onSubmit?: (event: Event) => void;
  };
  Blocks: {
    default: [];
  };
}

export default class AsmForm<T> extends Component<AsmFormSignature<T>> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Asm::Form': typeof AsmForm;
  }
}
