import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames, localClassName } from "ember-css-modules";
import { assert } from "@ember/debug";
import { isNone } from "@ember/utils";
import { classNames } from "@ember-decorators/component";
import { computed } from "@ember/object";

@classNames("ui-field")
@localClassNames("ui-field")
export default class UiField extends Component {
  layout = template;

  label!: string;
  description?: string = "";
  validationMessages?: Array<string> = [];

  @localClassName()
  direction?: string = "vertical"; //vertical | horizontal

  @computed("elementId")
  get inputId(): string {
    return `${this.elementId}-input`;
  }

  init() {
    super.init();
    assert("`label` is required", !isNone(this.label));
  }
}
