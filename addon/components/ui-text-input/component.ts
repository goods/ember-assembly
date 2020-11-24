import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames, localClassName } from "ember-css-modules";
import { classNames, attribute } from "@ember-decorators/component";
import { action } from "@ember/object";
import { isNone } from "@ember/utils";
import { set, computed } from "@ember/object";
import { htmlSafe } from "@ember/string";
import { SafeString } from "handlebars";

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
  width?: string; //Accepts any standard CSS width measurement

  @localClassName()
  hasError?: boolean = false;

  @attribute()
  @computed("width")
  get style(): SafeString {
    return htmlSafe(`width:${this.width}`);
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
