import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { classNames } from "@ember-decorators/component";
import { localClassNames, localClassName } from "ember-css-modules";
import { isNone } from "@ember/utils";
import { set } from "@ember/object";
import { action } from "@ember/object";

@classNames("ui-textarea")
@localClassNames("ui-textarea")
export default class UiTextarea extends Component {
  layout = template;

  id?: string = this.elementId;
  value?: string = "";
  onChange?: Function | null = null;
  required?: boolean = false;
  disabled?: boolean = false;

  @localClassName()
  hasError?: boolean = false;

  @action
  onKeyUp(value: string) {
    if (isNone(this.onChange)) {
      return set(this, "value", value);
    }
    return this.onChange(value, event);
  }
}
