import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { layout, tagName } from "@ember-decorators/component";
import { computed } from "@ember-decorators/object";

@layout(template)
@tagName("tr")
export default class UiTableRow extends Component {
  isHead?: boolean = false;
  hasFixedHeader?: boolean = false;
  onSort?: Function | null = null;

  @computed("isHead")
  get cellComponent() {
    if (this.isHead) {
      return "ui-table-head-cell";
    }
    return "ui-table-cell";
  }
}
