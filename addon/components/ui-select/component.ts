import Component from "@ember/component";
//@ts-ignore
import template from "./template";
import { localClassNames } from "ember-css-modules";

// <UiSelect @onChange={{action (mut value)}} @value={{value}} as |Select|>
//   <Select.Option @value="option-1">Option 1</Select.Option>
//   <Select.Option @value="option-2">Option 2</Select.Option>
//   <Select.Option @value="option-3">Option 3</Select.Option>
// </UiSelect>

@localClassNames("ui-select")
export default class UiSelect extends Component {
  layout = template;

  value!: any;
  onChange!: Function;
  labelPath?: string = "";
  isLoading?: boolean = false;
  isDisabled?: boolean = false;
  acceptsNull?: boolean = false;
  options?: Array<any> = [];
  placeholder?: string = "Please choose";
  triggerIcon?: string | null = null;
  triggerComponent?: string | null = null;
  optionComponent?: string | null = null;
}
