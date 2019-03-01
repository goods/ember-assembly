import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames, localClassName } from "ember-css-modules";
import { layout, classNames } from "@ember-decorators/component";

@classNames("ui-caret")
@localClassNames("ui-caret")
@layout(template)
export default class UiCaret extends Component {
  @localClassName()
  direction?: string | null = null;
}
