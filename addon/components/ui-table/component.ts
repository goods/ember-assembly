import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import { notEmpty } from '@ember/object/computed';
import { computed } from '@ember/object';

export default class UiTable extends Component {
  layout = template;
  tagName: string = '';

  isLoading?: boolean = false;
  columns?: Array<any> = [];
  sortBy?: string = '';
  sortOrder?: string = 'asc';
  onSort?: Function | null = null;
  height?: string = '';
  hasFixedHeader?: boolean = false;
  isAllSelected?: boolean = false;
  onSelectAll?: Function | null = null;
  onDeselectAll: Function | null = null;

  @computed('height')
  get heightClass(): string {
    return `height-${this.height}`;
  }

  @notEmpty('columns')
  hasColumns!: boolean;
}
