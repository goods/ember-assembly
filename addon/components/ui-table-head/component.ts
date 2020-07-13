import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { tagName } from "@ember-decorators/component";

@tagName("thead")
export default class UiTableHead extends Component {
  layout = template;

  isLoading?: boolean = false;
  hasFixedHeader?: boolean = false;
  onSort?: Function | null = null;
}
