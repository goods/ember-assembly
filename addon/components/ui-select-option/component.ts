import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames } from "ember-css-modules";
import { tagName, attribute, classNames } from "@ember-decorators/component";

@classNames("ui-select-option")
@localClassNames("ui-select-option")
@tagName("button")
export default class UiSelectOption extends Component {
  layout = template;

  onChange!: Function;
  onClose!: Function;

  @attribute("data-value")
  value!: any;

  label?: string = "";
  labelPath?: string = "";
  optionComponent?: any = null;

  click() {
    this.onChange(this.value);
    this.onClose();
  }
}
