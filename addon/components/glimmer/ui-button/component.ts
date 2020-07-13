import { isNone } from "@ember/utils";
import Component from "@glimmer/component";
import { attribute } from "@ember-decorators/component";
import { or } from "@ember/object/computed";
import { action } from "@ember/object";

interface GlimmerUiButtonArgs {
  onClick: Function | null;
  label: string;
  appearance: "default" | "strong" | "minimal";
  intent: "none" | "success" | "warning" | "danger";
  size: "default" | "small" | "large";
  isDisabled: boolean;
  isLoading: boolean;
}

export default class GlimmerUiButton extends Component<GlimmerUiButtonArgs> {
  @attribute()
  type?: string = "submit";

  get appearanceClass(): string {
    return `appearance-${this.args.appearance}`;
  }

  get intentClass(): string {
    return `intent-${this.args.intent}`;
  }

  get sizeClass(): string {
    return `size-${this.args.size}`;
  }

  @attribute()
  @or("isLoading", "isDisabled")
  disabled!: boolean;

  @action
  onClick() {
    console.log("hello");
    if (this.disabled === false && !isNone(this.args.onClick)) {
      this.args.onClick();
    }
  }
}
