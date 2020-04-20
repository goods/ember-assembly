import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames } from "ember-css-modules";
import { layout, classNames } from "@ember-decorators/component";
import moment, { Moment } from "moment";
import { action, computed, set } from "@ember/object";
import { isNone } from "@ember/utils";

interface Day {
  id: string;
  number: string;
  date: Moment;
  isCurrentMonth: boolean;
  isPreviousMonth: boolean;
  isNextMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
}

@classNames("ui-calendar")
@localClassNames("ui-calendar")
@layout(template)
export default class UiCalendar extends Component {
  selected: Moment[] = [];
  mode?: "single" | "multiple" | "range" = "multiple";
  center?: Moment = moment.utc();
  rangeStart?: Moment | undefined = undefined;
  rangeFinish?: Moment | undefined = undefined;
  onChangeSelection?: Function | null = null;
  onChangeRange?: Function | null = null;
  onChangeCenter?: Function | null = null;

  /*
  A local copy of the range start and finish is needed to handle the problem
  where the range is only actually selected once a start and finish have been
  chosen.
  */
  localRangeStart: Moment | undefined = undefined;
  localRangeFinish: Moment | undefined = undefined;

  @computed("center")
  get startDate(): Moment {
    return moment.utc(this.center).startOf("month").startOf("week");
  }

  @computed("center")
  get finishDate(): Moment {
    return moment.utc(this.center).endOf("month").endOf("week");
  }

  @computed(
    "center",
    "startDate",
    "finishDate",
    "selected.[]",
    "localRangeStart",
    "localRangeFinish"
  )
  get days(): Day[] {
    let days: any = [];
    let date = this.startDate.clone();
    let currentMonth = moment.utc().format("M");
    if (!isNone(this.center)) {
      currentMonth = this.center.format("M");
    }
    let formattedSelected = this.selected.map((selected) =>
      selected.format("YYYY-MM-DD")
    );

    while (date.isBefore(this.finishDate)) {
      let id = date.format("YYYY-MM-DD");
      let isSelected = false;
      let isRangeStart = false;
      let isRangeFinish = false;

      if (this.mode == "range") {
        let localRangeFinish = this.localRangeFinish;
        if (isNone(localRangeFinish)) {
          localRangeFinish = this.localRangeStart;
        }

        isRangeStart =
          !isNone(this.localRangeStart) &&
          this.localRangeStart.isSame(date, "day");

        isRangeFinish =
          !isNone(this.localRangeFinish) &&
          this.localRangeFinish.isSame(date, "day");

        isSelected =
          date.isSameOrAfter(this.localRangeStart, "day") &&
          date.isSameOrBefore(localRangeFinish, "day");
      } else {
        isSelected =
          formattedSelected.find((selected) => selected == id) !== undefined;
      }

      days.push({
        id: id,
        number: date.format("D"),
        date: date.clone(),
        isCurrentMonth: date.format("M") == currentMonth,
        isPreviousMonth: date.isBefore(this.center, "month"),
        isNextMonth: date.isAfter(this.center, "month"),
        isToday: date.isSame(moment.utc(), "day"),
        isSelected,
        isRangeStart,
        isRangeFinish,
      });
      date.add(1, "day");
    }
    return days;
  }

  @computed("days.[]")
  get weeks() {
    let { days } = this;
    let weeks: any = [];
    let i = 0;
    while (days[i]) {
      let daysOfWeek = days.slice(i, i + 7);
      weeks.push({
        id: `week-of-${daysOfWeek[0].id}`,
        days: daysOfWeek,
        missingDays: 7 - daysOfWeek.length,
      });
      i += 7;
    }
    return weeks;
  }

  @action
  onMoveCenter(quantity: number, unit: "day" | "month" | "year") {
    let center = moment.utc(this.center).add(quantity, unit);
    if (!isNone(this.onChangeCenter)) {
      this.onChangeCenter(center);
    } else {
      set(this, "center", center);
    }
  }

  @action
  onSelectDate(day: Day) {
    let selected: Moment[] = [];

    if (this.mode == "single") {
      selected = [day.date];
      if (!isNone(this.onChangeSelection)) {
        this.onChangeSelection(selected);
      }
    } else if (this.mode == "multiple") {
      selected = this.selected.map((date) => date.clone());
      if (day.isSelected) {
        let date = selected.find((date) => date.format() == day.date.format());
        if (!isNone(date)) {
          //@ts-ignore
          selected.removeObject(date);
        }
      } else {
        //@ts-ignore
        selected.pushObject(day.date);
      }
      if (!isNone(this.onChangeSelection)) {
        this.onChangeSelection(selected);
      }
    } else if (this.mode == "range") {
      let isChangingStart =
        isNone(this.localRangeStart) || !isNone(this.localRangeFinish);

      if (isChangingStart) {
        set(this, "localRangeStart", day.date);
        set(this, "localRangeFinish", undefined);
      } else {
        if (day.date.isBefore(this.localRangeStart)) {
          set(this, "localRangeFinish", this.localRangeStart);
          set(this, "localRangeStart", day.date);
        } else {
          set(this, "localRangeFinish", day.date);
        }

        if (!isNone(this.onChangeRange)) {
          this.onChangeRange(this.localRangeStart, this.localRangeFinish);
        }
      }
    }
  }

  init() {
    super.init();
    set(this, "localRangeStart", this.rangeStart);
    set(this, "localRangeFinish", this.rangeFinish);
  }
}
