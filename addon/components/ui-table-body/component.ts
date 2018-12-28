import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { layout, tagName } from "@ember-decorators/component";

@layout(template)
@tagName("tbody")
export default class UiTableBody extends Component {
  isLoading?: boolean = false;
}
