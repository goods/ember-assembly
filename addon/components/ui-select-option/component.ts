import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames } from "ember-css-modules";

@localClassNames("ui-select-option")
export default class UiSelectOption extends Component {
  layout = template;

  onChange!: Function;
  onClose!: Function;
  value!: any;
  label?: string = "";
  labelPath?: string = "";
  optionComponent?: any = null;

  click() {
    this.onChange(this.value);
    this.onClose();
  }
}
