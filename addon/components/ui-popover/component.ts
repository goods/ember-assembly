//ts-ignore see: https://github.com/cibernox/ember-basic-dropdown/issues/542

//@ts-ignore
import BasicDropdown from 'ember-basic-dropdown/components/basic-dropdown';
//@ts-ignore
import { setComponentTemplate } from '@ember/component';
//@ts-ignore
import layout from 'ember-basic-dropdown/templates/components/basic-dropdown';

// /*
//   Must add ui-popover-content class to yielded Popover.Content.

//   Add the class ui-popover-animated to yielded Popover.Content to animate.
//   <Popover.Content class="ui-popover-content ui-popover-animated">
// */

class UiPopover extends BasicDropdown {
  useAnimation?: boolean = true;
  tagName: string = '';
}

export default setComponentTemplate(layout, UiPopover);
