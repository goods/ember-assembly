import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { layout } from "@ember-decorators/component";
import { localClassNames, localClassName } from "ember-css-modules";
import { computed } from "@ember-decorators/object";

@localClassNames("ui-spinner")
@layout(template)
export default class UiSpinner extends Component {
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
