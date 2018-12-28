import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { layout } from "@ember-decorators/component";
import { localClassNames } from "ember-css-modules";

@localClassNames("ui-spinner")
@layout(template)
export default class UiSpinner extends Component {}
