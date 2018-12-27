import Component from "@ember/component";
//@ts-ignore
import template from "./template";
import { layout } from "@ember-decorators/component";
import { localClassNames } from "ember-css-modules";

@layout(template)
@localClassNames("ui-select")
export default class UiSelect extends Component {
  value!: any;
  onChange!: Function;
  labelPath?: string = "";
  isLoading?: boolean = false;
  isDisabled?: boolean = false;
  options?: Array<any> = [];
  placeholder?: string = "Please choose";
  triggerComponent?: string | null = null;
  optionComponent?: string | null = null;
}
