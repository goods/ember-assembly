import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames, localClassName } from "ember-css-modules";
import { tagName, attribute, classNames } from "@ember-decorators/component";
import { or } from "@ember/object/computed";
import { computed } from "@ember/object";
import { isNone } from "@ember/utils";

@classNames("ui-button")
@localClassNames("ui-button")
@tagName("button")
export default class UiButton extends Component {
  layout = template;

  onClick?: Function | null = null;
  label?: string = "";
  appearance?: "default" | "strong" | "minimal" = "default";
  width?: "full" | "";
  intent?: "none" | "success" | "warning" | "danger" = "none";
  size?: "default" | "small" | "large" = "default";
  isDisabled?: boolean = false;

  @attribute()
  type?: string = "submit";

  @localClassName()
  isLoading?: boolean = false;

  @localClassName()
  @computed("width")
  get widthClass(): string {
    return `${this.width}-width`;
  }

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

  @localClassName()
  @computed("size")
  get sizeClass(): string {
    return `size-${this.size}`;
  }

  @attribute()
  @or("isLoading", "isDisabled")
  disabled!: boolean;

  click() {
    if (this.disabled === false && !isNone(this.onClick)) {
      this.onClick();
    }
  }
}
