import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import layout from "./template";
import { localClassNames } from "ember-css-modules";

@localClassNames("ui-button")
export default class UiButton extends Component {
  layout = layout;
}
