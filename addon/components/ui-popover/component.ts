//@ts-ignore
import Component from "ember-basic-dropdown/components/basic-dropdown";
//@ts-ignore
import template from "ember-basic-dropdown/templates/components/basic-dropdown";
import { classNames, layout } from "@ember-decorators/component";

@layout(template)
@classNames("ui-popover")
export default class UiPopover extends Component {}
