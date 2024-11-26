import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import { isNone } from '@ember/utils';
import { action, computed } from '@ember/object';

export default class UiTableHeadCell extends Component {
  layout = template;
  tagName: string = '';

  onSort?: Function | null = null;
  key?: string | null = null;
  sortBy?: string = '';
  sortOrder?: 'asc' | 'desc' = 'asc';

  hasFixedHeader?: boolean = false;

  isSortable?: boolean = false;

  @computed('key', 'sortBy')
  get isSorted(): boolean {
    return this.key === this.sortBy;
  }

  @computed('isSorted', 'sortOrder')
  get isSortedAsc(): boolean {
    return this.isSorted && this.sortOrder === 'asc';
  }

  @computed('isSorted', 'sortOrder')
  get isSortedDesc(): boolean {
    return this.isSorted && this.sortOrder === 'desc';
  }

  @action
  onClick() {
    if (this.isSortable && !isNone(this.onSort)) {
      if (this.isSortedAsc) {
        this.onSort(this.key, 'desc');
      } else {
        this.onSort(this.key, 'asc');
      }
    }
  }
}
