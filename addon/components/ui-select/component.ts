import Component from "@ember/component";
//@ts-ignore
import template from "./template";
import { classNames, layout } from "@ember-decorators/component";

@layout(template)
@classNames("ui-select")
export default class UiSelect extends Component {}
