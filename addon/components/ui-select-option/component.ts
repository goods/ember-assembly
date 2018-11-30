import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import layout from "./template";

export default class UiSelectOption extends Component {
  onChange!: Function;
  onClose!: Function;
  value!: string;

  layout = layout;

  click() {
    this.onChange(this.value);
    this.onClose();
  }
}
