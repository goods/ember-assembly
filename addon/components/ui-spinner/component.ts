import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import { computed } from '@ember/object';

export default class UiSpinner extends Component {
  layout = template;
  tagName: string = '';

  size?: string = 'default';
  appearance?: string = 'default'; //Enum: default, strong

  @computed('appearance')
  get appearanceClass(): string {
    return `appearance-${this.appearance}`;
  }

  @computed('size')
  get sizeClass(): string {
    return `size-${this.size}`;
  }
}
