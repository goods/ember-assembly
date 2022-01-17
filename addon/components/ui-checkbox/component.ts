import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { className } from "@ember-decorators/component";
import { localClassNames, localClassName } from "ember-css-modules";
import { isNone } from "@ember/utils";

@localClassNames("ui-checkbox")
export default class UiCheckbox extends Component {
  layout = template;

  label?: string = "";

  @className("is-checked")
  @localClassName("is-checked")
  checked?: boolean = false;
  onChange?: Function | null = null;

  click(event: any) {
    if (!isNone(this.onChange)) {
      this.onChange(!this.checked, event);
      return false;
    }
    return;
  }
}
