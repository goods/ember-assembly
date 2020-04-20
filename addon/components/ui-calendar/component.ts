import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames } from "ember-css-modules";
import { layout, classNames } from "@ember-decorators/component";
import moment, { Moment } from "moment";
import { action, computed, get, set } from "@ember/object";
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
  center?: Moment | undefined = undefined;
  rangeStart?: Moment | undefined = undefined;
  rangeFinish?: Moment | undefined = undefined;
  onChangeSelection?: Function | null = null;
  onChangeCenter?: Function | null = null;

  @computed("center")
  get startDate(): Moment {
    return moment.utc(this.center).startOf("month").startOf("week");
  }

  @computed("center")
  get finishDate(): Moment {
    return moment.utc(this.center).endOf("month").endOf("week");
  }

  @computed("center", "startDate", "finishDate", "selected.[]")
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

      let isSelected =
        formattedSelected.find((selected) => selected == id) !== undefined;

      let isRangeStart =
        this.mode == "range" && get(formattedSelected, "firstObject") == id;
      let isRangeFinish =
        this.mode == "range" && get(formattedSelected, "lastObject") == id;

      days.push({
        id: id,
        number: date.format("D"),
        date: date.clone(),
        isCurrentMonth: date.format("M") == currentMonth,
        isPreviousMonth: date.isBefore(this.center, "month"),
        isNextMonth: date.isAfter(this.center, "month"),
        isToday: date.isSame(moment.utc(), "day"),
        isSelected: isSelected,
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
    } else if (this.mode == "range") {
      let isChangingStart =
        isNone(this.rangeStart) || !isNone(this.rangeFinish);

      if (isChangingStart) {
        set(this, "rangeStart", day.date);
        set(this, "rangeFinish", undefined);
        selected = [day.date];
      } else {
        if (day.date.isBefore(this.rangeStart)) {
          set(this, "rangeFinish", this.rangeStart);
          set(this, "rangeStart", day.date);
        } else {
          set(this, "rangeFinish", day.date);
        }

        //Enumerate all the dates into the list
        let date = this.rangeStart?.clone();
        while (date?.isAfter(this.rangeFinish) == false) {
          //@ts-ignore
          selected.pushObject(date.clone());
          date.add(1, "day");
        }
      }
    }

    if (!isNone(this.onChangeSelection)) {
      this.onChangeSelection(selected, this.rangeStart, this.rangeFinish);
    }
  }

  init() {
    super.init();
    if (isNone(this.center)) {
      if (isNone(this.selected[0])) {
        set(this, "center", moment.utc());
      } else {
        set(this, "center", this.selected[0]);
      }
    }
  }
}
