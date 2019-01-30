import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { layout, classNames } from "@ember-decorators/component";
import { localClassNames, localClassName } from "ember-css-modules";
import { notEmpty } from "@ember-decorators/object/computed";
import { computed } from "@ember-decorators/object";

@classNames("ui-table")
@localClassNames("ui-table")
@layout(template)
export default class UiTable extends Component {
  isLoading?: boolean = false;
  columns?: Array<any> = [];
  sortBy?: string = "";
  sortOrder?: string = "asc";
  onSort?: Function | null = null;
  height?: string = "";
  hasFixedHeader?: boolean = false;

  @localClassName()
  @computed("height")
  get heightClass(): string {
    return `height-${this.height}`;
  }

  @notEmpty("columns")
  hasColumns!: boolean;
}
