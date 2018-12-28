import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames, localClassName } from "ember-css-modules";
import { layout } from "@ember-decorators/component";

@localClassNames("ui-caret")
@layout(template)
export default class UiCaret extends Component {
  @localClassName()
  direction?: string | null = null;
}
