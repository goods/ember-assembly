import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { layout, tagName } from "@ember-decorators/component";
import { computed, action } from "@ember-decorators/object";
import { isNone } from "@ember/utils";

@layout(template)
@tagName("tr")
export default class UiTableRow extends Component {
  isHead?: boolean = false;
  hasFixedHeader?: boolean = false;
  onSort?: Function | null = null;
  isSelected?: boolean = false;
  onSelect?: Function | null = null;
  onDeselect: Function | null = null;

  @computed("isHead")
  get cellComponent() {
    if (this.isHead) {
      return "ui-table-head-cell";
    }
    return "ui-table-cell";
  }

  @action
  onToggleSelection(isSelected: boolean) {
    if (isNone(this.onSelect) == false && isSelected != true) {
      //@ts-ignore
      this.onSelect();
    }

    if (isNone(this.onDeselect) == false && isSelected == true) {
      //@ts-ignore
      this.onDeselect();
    }
  }
}
