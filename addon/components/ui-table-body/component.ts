import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';

export default class UiTableBody extends Component {
  layout = template;
  tagName: string = '';

  isLoading?: boolean = false;
}
