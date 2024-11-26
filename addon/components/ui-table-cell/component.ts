import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import { notEmpty } from '@ember/object/computed';

export default class UiTableCell extends Component {
  layout = template;
  tagName: string = '';

  linkTo?: any[] = [];

  @notEmpty('linkTo')
  hasLink!: boolean;
}
