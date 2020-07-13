import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames, localClassName } from "ember-css-modules";
import { computed } from "@ember/object";

@localClassNames("ui-spinner")
export default class UiSpinner extends Component {
  layout = template;

  size?: string = "default";
  appearance?: string = "default"; //Enum: default, strong

  @localClassName()
  @computed("appearance")
  get appearanceClass(): string {
    return `appearance-${this.appearance}`;
  }

  @localClassName()
  @computed("size")
  get sizeClass(): string {
    return `size-${this.size}`;
  }
}
