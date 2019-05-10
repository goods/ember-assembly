import Component from "ember-assembly/components/ui-text-input/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames } from "ember-css-modules";
import { layout } from "@ember-decorators/component";

@localClassNames("ui-search-input")
@layout(template)
export default class UiSearchInput extends Component {
  isSearching?: boolean = false;
}
