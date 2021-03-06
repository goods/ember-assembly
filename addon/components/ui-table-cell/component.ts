import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { tagName, classNames } from "@ember-decorators/component";
import { localClassNames, localClassName } from "ember-css-modules";
import { notEmpty } from "@ember/object/computed";

@localClassNames("ui-table-cell")
@classNames("ui-table-cell")
@tagName("td")
export default class UiTableCell extends Component {
  layout = template;

  linkTo?: any[] = [];

  @localClassName()
  @notEmpty("linkTo")
  hasLink!: boolean;
}
