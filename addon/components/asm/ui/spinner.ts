import Component from '@glimmer/component';

export type Size = 'default';
export type Appearance = 'default' | 'strong';

interface AsmUiSpinnerArgs {
  size?: Size;
  appearance?: Appearance;
}

export default class AsmUiSpinner extends Component<AsmUiSpinnerArgs> {
  get size(): Size {
    return this.args.size ?? 'default';
  }

  get appearance(): Appearance {
    return this.args.appearance ?? 'default';
  }
}
