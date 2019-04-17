import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { layout, classNames } from "@ember-decorators/component";
import { localClassNames, localClassName } from "ember-css-modules";
import { isNone } from "@ember/utils";
import { set } from "@ember/object";
import { action } from "@ember-decorators/object";

@classNames("ui-textarea")
@localClassNames("ui-textarea")
@layout(template)
export default class UiTextarea extends Component {
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
