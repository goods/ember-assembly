import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames, localClassName } from "ember-css-modules";
import { isNone } from "@ember/utils";
import { classNames } from "@ember-decorators/component";
import { computed } from "@ember/object";

@classNames("ui-field")
@localClassNames("ui-field")
export default class UiField extends Component {
  layout = template;

  label?: string | null = null;
  description?: string = "";
  validationMessages?: string[] | string = [];

  @computed("validationMessages")
  get errors(): string[] | null {
    if (isNone(this.validationMessages)) {
      return null;
    }
    if (Array.isArray(this.validationMessages) == false) {
      return [this.validationMessages];
    }
    return this.validationMessages;
  }

  @localClassName()
  direction?: string = "vertical"; //vertical | horizontal

  @computed("elementId")
  get inputId(): string {
    return `${this.elementId}-input`;
  }
}
