import Component from "ember-assembly/components/ui-text-input/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { layout } from "@ember-decorators/component";
import { localClassNames } from "ember-css-modules";

@localClassNames("ui-search-input")
@layout(template)
export default class UiSearchInput extends Component {}
