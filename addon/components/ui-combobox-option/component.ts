import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { layout } from "@ember-decorators/component";
import { localClassNames, localClassName } from "ember-css-modules";

@localClassNames("ui-combobox-option")
@layout(template)
export default class UiComboboxOption extends Component {
  onSelect!: Function;
  onDeselect!: Function;
  value!: any;
  @localClassName() isSelected?: boolean = false;
  labelPath?: string = "";
  optionComponent?: any = null;

  click() {
    if (this.isSelected) {
      this.onDeselect(this.value);
    } else {
      this.onSelect(this.value);
    }
  }
}
