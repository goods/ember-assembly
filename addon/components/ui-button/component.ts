import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames, localClassName } from "ember-css-modules";
import {
  layout,
  tagName,
  attribute,
  classNames
} from "@ember-decorators/component";
import { or } from "@ember/object/computed";
import { computed } from "@ember/object";
import { isNone } from "@ember/utils";

@classNames("ui-button")
@localClassNames("ui-button")
@layout(template)
@tagName("button")
export default class UiButton extends Component {
  onClick?: Function | null = null;
  label?: string = "";
  appearance?: string = "default"; //Enum: default, strong, minimal
  intent?: string = "none"; //Enum: none, success, warning, danger
  size?: string = "default"; //Enum: small, large
  isDisabled?: boolean = false;

  @attribute()
  type?: string = "submit";

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
