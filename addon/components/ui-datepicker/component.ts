import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames } from "ember-css-modules";
import { layout, classNames } from "@ember-decorators/component";
import { Moment } from "moment";
import { action } from "@ember/object";
import { isNone } from "@ember/utils";

@classNames("ui-datepicker")
@localClassNames("ui-datepicker")
@layout(template)
export default class UiDatepicker extends Component {
  selected: Moment[] = [];
  mode?: "single" | "multiple" | "range" = "multiple";
  center?: Moment | undefined = undefined;
  rangeStart?: Moment | undefined = undefined;
  rangeFinish?: Moment | undefined = undefined;

  onChangeSelection?: Function | null = null;
  onChangeRange?: Function | null = null;
  onChangeCenter?: Function | null = null;

  @action
  onChangeDateSelection(onClose: Function, selected: Moment[]) {
    if (!isNone(this.onChangeSelection)) {
      this.onChangeSelection(selected);
    }

    if (this.mode == "single") {
      onClose();
    }
  }

  @action
  onChangeDateRange(
    onClose: Function,
    rangeStart: Moment[],
    rangeFinish: Moment[]
  ) {
    if (!isNone(this.onChangeRange)) {
      this.onChangeRange(rangeStart, rangeFinish);
    }
    onClose();
  }
}
