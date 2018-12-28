import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { layout, tagName } from "@ember-decorators/component";

@layout(template)
@tagName("thead")
export default class UiTableHead extends Component {
  isLoading?: boolean = false;
  hasFixedHeader?: boolean = false;
  onSort?: Function | null = null;
}
