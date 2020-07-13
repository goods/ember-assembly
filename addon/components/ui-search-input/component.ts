import Component from "ember-assembly/components/ui-text-input/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames } from "ember-css-modules";
import { action, set } from "@ember/object";
import { isNone } from "@ember/utils";

@localClassNames("ui-search-input")
export default class UiSearchInput extends Component {
  layout = template;

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
