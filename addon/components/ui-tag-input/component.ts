import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { layout } from "@ember-decorators/component";
import { action } from "@ember-decorators/object";
import { localClassNames, localClassName } from "ember-css-modules";
import { assert } from "@ember/debug";
import { isNone } from "@ember/utils";
import { set } from "@ember/object";

@layout(template)
@localClassNames("ui-tag-input")
export default class UiTagInput extends Component {
  tags!: Array<string>;
  onAdd!: Function;
  onRemove!: Function;
  placeholder?: string = "";

  @localClassName()
  hasError?: boolean = false;

  tag: string = "";

  @action
  onChangedTag(event: any) {
    if (event.which === 13) {
      this.onAdd(this.tag);
      set(this, "tag", "");
    }
  }

  constructor() {
    super(...arguments);
    assert("`tags` is required", !isNone(this.tags));
    assert("`onAdd` is required", !isNone(this.onAdd));
    assert("`onRemove` is required", !isNone(this.onRemove));
  }
}
