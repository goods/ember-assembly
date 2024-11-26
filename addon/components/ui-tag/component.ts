import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import { isNone } from '@ember/utils';
import { computed } from '@ember/object';

export default class UiTag extends Component {
  layout = template;
  tagName: string = '';

  label!: string;
  icon?: string | null = null;
  appearance?: string = 'default'; //Enum: default, strong, minimal
  onClick?: Function | null = null;

  @computed('onClick')
  get disabled() {
    return isNone(this.onClick);
  }

  @computed('appearance')
  get appearanceClass(): string {
    return `appearance-${this.appearance}`;
  }

  click() {
    if (!isNone(this.onClick)) {
      this.onClick();
    }
  }
}
