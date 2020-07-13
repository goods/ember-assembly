import Component from "@ember/component";
//@ts-ignore
import template from "./template";
import { localClassNames } from "ember-css-modules";
import { computed } from "@ember/object";
import { isEmpty, isNone } from "@ember/utils";
import { get } from "@ember/object";

@localClassNames("ui-combobox")
export default class UiCombobox extends Component {
  layout = template;

  selected!: any;
  onSelect!: Function;
  onDeselect!: Function;
  labelPath?: string = "";
  isLoading?: boolean = false;
  isDisabled?: boolean = false;
  options?: Array<any> = [];
  placeholder?: string = "Please choose";
  triggerComponent?: any = null;
  optionComponent?: any = null;
  hasTitle?: boolean = true;
  hasFilter?: boolean = true;
  title?: string = "Select options";
  filter?: string = "";

  @computed("selected.[]", "labelPath", "placeholder")
  get triggerLabel(): string {
    if (isEmpty(this.selected) && !isNone(this.placeholder)) {
      return this.placeholder;
    }

    let selectedCount = get(this.selected, "length");
    if (selectedCount > 1) {
      return `${selectedCount} selected...`;
    }
    let value = get(this.selected, "firstObject");

    if (!isEmpty(this.labelPath) && !isNone(this.labelPath)) {
      return get(value, this.labelPath);
    }

    return value;
  }

  @computed("options.[]", "filter")
  get filteredOptions(): Array<any> {
    if (isNone(this.options)) {
      return [];
    }

    if (isNone(this.filter)) {
      return this.options;
    }

    return this.options.filter((option) => {
      let label = option;
      if (!isEmpty(this.labelPath) && !isNone(this.labelPath)) {
        label = get(option, this.labelPath);
      }
      //@ts-ignore
      return label.toLowerCase().includes(this.filter.toLowerCase());
    });
  }
}
