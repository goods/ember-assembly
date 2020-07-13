import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames, localClassName } from "ember-css-modules";
import { classNames } from "@ember-decorators/component";

@classNames("ui-caret")
@localClassNames("ui-caret")
export default class UiCaret extends Component {
  layout = template;

  @localClassName()
  direction?: string | null = null;
}
