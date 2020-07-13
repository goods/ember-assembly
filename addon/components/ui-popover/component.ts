//@ts-ignore
import Component from "ember-basic-dropdown/components/basic-dropdown";
//@ts-ignore
import template from "ember-basic-dropdown/templates/components/basic-dropdown";
import { localClassNames } from "ember-css-modules";

/*
  Must add ui-popover-content class to yielded Popover.content.

  Add the class ui-popover-animated to yielded Popover.content to animate.
  <Popover.content @class="ui-popover-content ui-popover-animated">
*/

@localClassNames("ui-popover")
export default class UiPopover extends Component {
  layout = template;

  useAnimation?: boolean = true;
}
