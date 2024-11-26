import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';

export default class UiTableHead extends Component {
  layout = template;
  tagName: string = '';

  isLoading?: boolean = false;
  hasFixedHeader?: boolean = false;
  onSort?: Function | null = null;
}
