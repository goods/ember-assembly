import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { classNames } from "@ember-decorators/component";
import { localClassNames, localClassName } from "ember-css-modules";
import { notEmpty } from "@ember/object/computed";
import { computed } from "@ember/object";

@classNames("ui-table")
@localClassNames("ui-table")
export default class UiTable extends Component {
  layout = template;

  isLoading?: boolean = false;
  columns?: Array<any> = [];
  sortBy?: string = "";
  sortOrder?: string = "asc";
  onSort?: Function | null = null;
  height?: string = "";
  hasFixedHeader?: boolean = false;
  isAllSelected?: boolean = false;
  onSelectAll?: Function | null = null;
  onDeselectAll: Function | null = null;

  @localClassName()
  @computed("height")
  get heightClass(): string {
    return `height-${this.height}`;
  }

  @notEmpty("columns")
  hasColumns!: boolean;
}
