import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames, localClassName } from "ember-css-modules";
import { classNames } from "@ember-decorators/component";
import { action } from "@ember/object";
import { isNone } from "@ember/utils";
import { set, computed } from "@ember/object";

@classNames("ui-text-input")
@localClassNames("ui-text-input")
export default class UiTextInput extends Component {
  layout = template;

  value?: string = "";
  onSetValue?: Function | null = null;
  onFocusOut?: Function | null = null;
  inputId?: string = "";
  required?: boolean = false;
  type?: string = "text";
  disabled?: boolean = false;
  max?: number | null = null;
  min?: number | null = null;
  width?: "full" | "default" = "default";

  @localClassName()
  hasError?: boolean = false;

  @localClassName()
  @computed("width")
  get widthClass(): string {
    return `${this.width}-width`;
  }

  @action
  onKeyUp(value: string) {
    if (isNone(this.onSetValue)) {
      return set(this, "value", value);
    }
    return this.onSetValue(value, event);
  }

  @action
  didFocusOut() {
    if (!isNone(this.onFocusOut)) {
      this.onFocusOut();
    }
  }
}
