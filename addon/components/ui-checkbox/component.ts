import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames, localClassName } from "ember-css-modules";
import { isNone } from "@ember/utils";

@localClassNames("ui-checkbox")
export default class UiCheckbox extends Component {
  layout = template;

  label?: string = "";

  @localClassName("is-checked")
  checked?: boolean = false;
  onChange?: Function | null = null;

  click() {
    if (!isNone(this.onChange)) {
      this.onChange(!this.checked);
    }
  }
}
