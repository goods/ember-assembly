import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { layout, tagName, classNames } from "@ember-decorators/component";
import { localClassNames, localClassName } from "ember-css-modules";
import { notEmpty } from "@ember-decorators/object/computed";

@localClassNames("ui-table-cell")
@classNames("ui-table-cell")
@layout(template)
@tagName("td")
export default class UiTableCell extends Component {
  linkTo?: any[] = [];

  @localClassName()
  @notEmpty("linkTo")
  hasLink!: boolean;
}
