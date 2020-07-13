import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { tagName } from "@ember-decorators/component";
import { localClassNames, localClassName } from "ember-css-modules";
import { isNone } from "@ember/utils";
import { computed } from "@ember/object";

@localClassNames("ui-table-head-cell")
@tagName("th")
export default class UiTableHeadCell extends Component {
  layout = template;

  onSort?: Function | null = null;
  key?: string | null = null;
  sortBy?: string = "";
  sortOrder?: "asc" | "desc" = "asc";

  @localClassName("has-fixed-header")
  hasFixedHeader?: boolean = false;

  @localClassName("is-sortable")
  isSortable?: boolean = false;

  @computed("key", "sortBy")
  get isSorted(): boolean {
    return this.key === this.sortBy;
  }

  @computed("isSorted", "sortOrder")
  get isSortedAsc(): boolean {
    return this.isSorted && this.sortOrder === "asc";
  }

  @computed("isSorted", "sortOrder")
  get isSortedDesc(): boolean {
    return this.isSorted && this.sortOrder === "desc";
  }

  click() {
    if (this.isSortable && !isNone(this.onSort)) {
      if (this.isSortedAsc) {
        this.onSort(this.key, "desc");
      } else {
        this.onSort(this.key, "asc");
      }
    }
  }
}
