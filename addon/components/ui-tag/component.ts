import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames, localClassName } from "ember-css-modules";
import { layout, tagName } from "@ember-decorators/component";
import { isNone } from "@ember/utils";
import { computed } from "@ember/object";

@localClassNames("ui-tag")
@layout(template)
@tagName("button")
export default class UiTag extends Component {
  label!: string;
  icon?: string | null = null;
  appearance?: string = "default"; //Enum: default, strong, minimal
  onClick?: Function | null = null;

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
