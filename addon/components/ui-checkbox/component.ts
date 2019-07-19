import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames, localClassName } from "ember-css-modules";
import { layout } from "@ember-decorators/component";
import { isNone } from "@ember/utils";

@localClassNames("ui-checkbox")
@layout(template)
export default class UiCheckbox extends Component {
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
