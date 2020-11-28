//@ts-ignore see: https://github.com/cibernox/ember-basic-dropdown/issues/542
import BasicDropdown from "ember-basic-dropdown/components/basic-dropdown";
//@ts-ignore
import { setComponentTemplate } from "@ember/component";
//@ts-ignore
import layout from "ember-basic-dropdown/templates/components/basic-dropdown";
import { localClassNames } from "ember-css-modules";

// /*
//   Must add ui-popover-content class to yielded Popover.Content.

//   Add the class ui-popover-animated to yielded Popover.Content to animate.
//   <Popover.Content class="ui-popover-content ui-popover-animated">
// */

@localClassNames("ui-popover")
class UiPopover extends BasicDropdown {
  useAnimation?: boolean = true;
}

export default setComponentTemplate(layout, UiPopover);
