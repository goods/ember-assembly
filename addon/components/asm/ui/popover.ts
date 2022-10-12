import Component from '@glimmer/component';

interface AsmUiPopoverArgs {
  renderInPlace?: boolean;
  useAnimation?: boolean;
}

export default class AsmUiPopover extends Component<AsmUiPopoverArgs> {
  /**
   * Defaults to true because https://github.com/cibernox/ember-basic-dropdown/issues/614
   */
  get renderInPlace(): boolean {
    return this.args.renderInPlace ?? true;
  }

  get useAnimation(): boolean {
    return this.args.useAnimation ?? true;
  }
}
