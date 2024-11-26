import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import { action } from '@ember/object';
import { assert } from '@ember/debug';
import { isNone } from '@ember/utils';
import { set } from '@ember/object';

export default class UiTagInput extends Component {
  layout = template;
  tagName: string = '';

  tags!: Array<string>;
  onAdd!: Function;
  onRemove!: Function;
  placeholder?: string = '';

  hasError?: boolean = false;

  tag: string = '';

  @action
  onChangedTag(event: any) {
    if (event.which === 13) {
      this.onAdd(this.tag);
      set(this, 'tag', '');
    }
  }

  init() {
    super.init();
    assert('`tags` is required', !isNone(this.tags));
    assert('`onAdd` is required', !isNone(this.onAdd));
    assert('`onRemove` is required', !isNone(this.onRemove));
  }
}
