import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { action } from "@ember/object";
import { localClassNames, localClassName } from "ember-css-modules";
import { assert } from "@ember/debug";
import { isNone } from "@ember/utils";
import { set } from "@ember/object";

@localClassNames("ui-tag-input")
export default class UiTagInput extends Component {
  layout = template;

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

  init() {
    super.init();
    assert("`tags` is required", !isNone(this.tags));
    assert("`onAdd` is required", !isNone(this.onAdd));
    assert("`onRemove` is required", !isNone(this.onRemove));
  }
}
