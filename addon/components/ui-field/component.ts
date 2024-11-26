import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import { isNone } from '@ember/utils';
import { computed } from '@ember/object';

export default class UiField extends Component {
  layout = template;
  tagName: string = '';

  label?: string | null = null;
  description?: string = '';
  validationMessages?: string[] | string = [];

  @computed('validationMessages')
  get errors(): string[] | null {
    if (isNone(this.validationMessages)) {
      return null;
    }
    if (!Array.isArray(this.validationMessages)) {
      return [this.validationMessages];
    }

    return this.validationMessages;
  }

  direction?: string = 'vertical'; //vertical | horizontal

  @computed('elementId')
  get inputId(): string {
    return `${this.elementId}-input`;
  }
}
