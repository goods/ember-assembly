import Component from '@glimmer/component';

export interface AsmFormCancelButtonSignature<T> {
  Element: HTMLLabelElement;
  Args: {
    label?: string;
  };
  Blocks: {
    default: [];
  };
}

export default class AsmFormCancelButton<T> extends Component<
  AsmFormCancelButtonSignature<T>
> {
  get label() {
    return this.args.label ?? 'Cancel';
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Asm::Form::CancelButton': typeof AsmFormCancelButton;
  }
}
