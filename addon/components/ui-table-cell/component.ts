import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { layout, tagName } from "@ember-decorators/component";
import { localClassNames } from "ember-css-modules";

@localClassNames("ui-table-cell")
@layout(template)
@tagName("td")
export default class UiTableCell extends Component {}
