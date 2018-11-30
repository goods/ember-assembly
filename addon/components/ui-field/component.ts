import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames } from "ember-css-modules";
import { assert } from "@ember/debug";
import { isNone } from "@ember/utils";
//@ts-ignore
import { defaultTo } from "lodash";
import { layout } from "@ember-decorators/component";
import { computed } from "@ember-decorators/object";

@layout(template)
@localClassNames("ui-field")
export default class UiField extends Component {
  label!: string;
  description?: string = defaultTo(this.description, "");
  validationMessages?: Array<string> = defaultTo(this.validationMessages, []);

  @computed("elementId")
  get inputId(): string {
    return `${this.elementId}-input`;
  }

  constructor() {
    super(...arguments);
    assert("`label` is required", !isNone(this.label));
  }
}
