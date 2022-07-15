import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames, localClassName } from "ember-css-modules";
import { tagName, attribute } from "@ember-decorators/component";
import { isNone } from "@ember/utils";
import { computed } from "@ember/object";

@localClassNames("ui-tag")
@tagName("button")
export default class UiTag extends Component {
  layout = template;

  label!: string;
  icon?: string | null = null;
  appearance?: string = "default"; //Enum: default, strong, minimal
  onClick?: Function | null = null;

  @attribute()
  @computed("onClick")
  get disabled() {
    return isNone(this.onClick);
  }

  @localClassName()
  @computed("appearance")
  get appearanceClass(): string {
    return `appearance-${this.appearance}`;
  }

  click() {
    if (!isNone(this.onClick)) {
      this.onClick();
    }
  }
}
