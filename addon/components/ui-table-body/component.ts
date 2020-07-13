import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { tagName } from "@ember-decorators/component";

@tagName("tbody")
export default class UiTableBody extends Component {
  layout = template;

  isLoading?: boolean = false;
}
