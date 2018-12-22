import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames, localClassName } from "ember-css-modules";
import { tagName, layout, attribute } from "@ember-decorators/component";
import { isNone } from "@ember/utils";
import { computed } from "@ember-decorators/object";
import { or } from "@ember-decorators/object/computed";

@localClassNames("ui-button")
@layout(template)
@tagName("button")
export default class UiButton extends Component {
  appearance?: string = "default";
  intent?: string = "none";

  onClick?: Function | null = null;
  label?: string = "";
  isDisabled?: boolean = false;

  @localClassName()
  isLoading?: boolean = false;

  @localClassName()
  @computed("appearance")
  get appearanceClass(): string {
    return `appearance-${this.appearance}`;
  }

  @localClassName()
  @computed("intent")
  get intentClass(): string {
    return `intent-${this.intent}`;
  }

  @attribute()
  @or("isLoading", "isDisabled")
  disabled!: boolean;

  click() {
    if (!isNone(this.onClick) && this.isDisabled === false) {
      this.onClick();
    }
  }
}
