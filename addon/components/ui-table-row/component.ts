import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import { computed, action } from '@ember/object';
import { isNone } from '@ember/utils';
import { notEmpty } from '@ember/object/computed';

export default class UiTableRow extends Component {
  layout = template;
  tagName: string = '';

  isHead?: boolean = false;
  hasFixedHeader?: boolean = false;
  onSort?: Function | null = null;
  isSelected?: boolean = false;
  onSelect?: Function | null = null;
  onDeselect: Function | null = null;
  linkTo?: any[] = [];

  @computed('isHead')
  get cellComponent() {
    if (this.isHead) {
      return 'ui-table-head-cell';
    }
    return 'ui-table-cell';
  }

  @notEmpty('linkTo')
  hasLink!: boolean;

  @action
  onToggleSelection(isSelected: boolean) {
    if (isNone(this.onSelect) == false && isSelected != true) {
      //@ts-ignore
      this.onSelect();
    }

    if (isNone(this.onDeselect) == false && isSelected == true) {
      //@ts-ignore
      this.onDeselect();
    }
  }
}
