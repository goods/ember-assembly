import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { layout, tagName } from "@ember-decorators/component";
import { localClassNames, localClassName } from "ember-css-modules";
import { isNone } from "@ember/utils";
import { set } from "@ember/object";

@localClassNames("ui-textarea")
@layout(template)
@tagName("textarea")
export default class UiTextarea extends Component {
  id?: string = this.elementId;
  value?: string = "";
  onSetValue?: Function | null = null;
  required?: boolean = false;
  disabled?: boolean = false;

  @localClassName()
  hasError?: boolean = false;

  keyUp(event: KeyboardEvent) {
    //@ts-ignore
    let value = event.currentTarget.value;

    if (isNone(this.onSetValue)) {
      return set(this, "value", value);
    }
    return this.onSetValue(value, event);
  }
}
