import Component from "ember-assembly/components/ui-text-input/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames } from "ember-css-modules";
import { layout } from "@ember-decorators/component";
import { action, set } from "@ember/object";
import { isNone } from "@ember/utils";

@localClassNames("ui-search-input")
@layout(template)
export default class UiSearchInput extends Component {
  value?: string = "";
  onChange?: Function | null = null;
  isSearching?: boolean = false;

  @action
  onKeyUp(value: string) {
    if (isNone(this.onChange)) {
      return set(this, "value", value);
    }
    return this.onChange(value, event);
  }
}
