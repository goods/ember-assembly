import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { layout } from "@ember-decorators/component";
import { localClassNames } from "ember-css-modules";

@layout(template)
@localClassNames("ui-select-option")
export default class UiSelectOption extends Component {
  onChange!: Function;
  onClose!: Function;
  value!: string;
  labelPath?: string = "";
  optionComponent?: string = "";


  click() {
    this.onChange(this.value);
    this.onClose();
  }
}
