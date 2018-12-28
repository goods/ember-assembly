import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { layout } from "@ember-decorators/component";
import { localClassNames } from "ember-css-modules";

@localClassNames("ui-select-option")
@layout(template)
export default class UiSelectOption extends Component {
  onChange!: Function;
  onClose!: Function;
  value!: any;
  labelPath?: string = "";
  optionComponent?: any = null;

  click() {
    this.onChange(this.value);
    this.onClose();
  }
}
