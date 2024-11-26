import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';

export default class UiCaret extends Component {
  layout = template;
  tagName: string = '';

  direction?: string | null = null;
}
