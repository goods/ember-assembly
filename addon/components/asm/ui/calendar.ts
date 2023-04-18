import Component from '@glimmer/component';
import moment, { Moment } from 'moment';
import { action } from '@ember/object';
import { isNone, isEmpty } from '@ember/utils';
import { tracked } from '@glimmer/tracking';

type CalendarMode = 'single' | 'multiple' | 'range';

interface AsmUiCalendarArgs {
  selected: Moment[];
  isLoading?: boolean;
  mode?: CalendarMode;
  center?: Moment;
  daysMetadata?: DayMetadata[];
  rangeStart?: Moment | undefined;
  rangeFinish?: Moment | undefined;
  onChangeSelection?: (selection: Moment[]) => void;
  onChangeRange?: (date: Moment | undefined) => void | undefined;
  onChangeCenter?: (date: Moment | undefined) => void | undefined;
}

interface Day {
  id: string;
  number: string;
  date: Moment;
  isCurrentMonth: boolean;
  isPreviousMonth: boolean;
  isNextMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isRangeStart: boolean;
  isRangeFinish: boolean;
  metadata: any;
}

interface DayMetadata {
  date: Moment;
  metadata: any;
}

export default class AsmUiCalendar extends Component<AsmUiCalendarArgs> {
  /**
   *
   */
  get mode(): CalendarMode {
    return this.args.mode ?? 'multiple';
  }

  /**
   *
   */
  get center(): Moment {
    return this.args.center ?? moment.utc();
  }

  /**
   *
   */
  get selected(): Moment[] {
    return this.args.selected ?? [];
  }

  /**
   *
   */
  get daysMetadata(): DayMetadata[] {
    return this.args.daysMetadata ?? [];
  }

  /**
   *
   */
  get isLoading(): boolean {
    return this.args.isLoading ?? false;
  }

  /*
  A local copy of the range start and finish is needed to handle the problem
  where the range is only actually selected once a start and finish have been
  chosen.
  */
  @tracked localRangeStart: Moment | undefined = undefined;
  @tracked localRangeFinish: Moment | undefined = undefined;

  /**
   *
   */
  get startDate(): Moment {
    return moment.utc(this.center).startOf('month').startOf('week');
  }

  /**
   *
   */
  get finishDate(): Moment {
    return moment.utc(this.center).endOf('month').endOf('week');
  }

  /**
   *
   */
  get days(): Day[] {
    let days: any = [];
    let date = this.startDate.clone();
    let currentMonth = moment.utc().format('M');
    if (!isNone(this.center)) {
      currentMonth = this.center.format('M');
    }
    let formattedSelected = this.selected.map((selected: any) =>
      moment(selected).format('YYYY-MM-DD')
    );

    let dayMetadataIndex = this.daysMetadata.map((dayMetadata: any) => {
      let id = dayMetadata.date.format('YYYY-MM-DD');
      return {
        id,
        dayMetadata,
      };
    });

    while (date.isBefore(this.finishDate)) {
      let id = date.format('YYYY-MM-DD');
      let isSelected = false;
      let isRangeStart = false;
      let isRangeFinish = false;

      if (this.mode == 'range') {
        let localRangeFinish = this.localRangeFinish;
        if (isNone(localRangeFinish)) {
          localRangeFinish = this.localRangeStart;
        }

        isRangeStart =
          !isNone(this.localRangeStart) &&
          this.localRangeStart.isSame(date, 'day');

        isRangeFinish =
          !isNone(this.localRangeFinish) &&
          this.localRangeFinish.isSame(date, 'day');

        isSelected =
          date.isSameOrAfter(this.localRangeStart, 'day') &&
          date.isSameOrBefore(localRangeFinish, 'day');
      } else {
        isSelected =
          formattedSelected.find((selected: any) => selected == id) !==
          undefined;
      }

      let metadata = null;
      if (!isEmpty(dayMetadataIndex)) {
        let item = dayMetadataIndex.find((item: any) => {
          return item.id == id;
        });
        if (!isNone(item)) {
          metadata = item.dayMetadata;
        }
      }

      days.push({
        id: id,
        number: date.format('D'),
        date: date.clone(),
        isCurrentMonth: date.format('M') == currentMonth,
        isPreviousMonth: date.isBefore(this.center, 'month'),
        isNextMonth: date.isAfter(this.center, 'month'),
        isToday: date.isSame(moment.utc(), 'day'),
        isSelected,
        isRangeStart,
        isRangeFinish,
        metadata,
      });
      date.add(1, 'day');
    }
    return days;
  }

  /**
   *
   */
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

  /**
   *
   * @param quantity
   * @param unit
   */
  @action
  onMoveCenter(quantity: number, unit: 'day' | 'month' | 'year') {
    let center = moment.utc(this.center).add(quantity, unit);
    if (!isNone(this.args.onChangeCenter)) {
      this.args.onChangeCenter(center);
    } else {
      set(this, 'center', center);
    }
  }

  @action
  onSelectDate(day: Day) {
    let selected: Moment[] = [];

    if (this.mode == 'single') {
      selected = [day.date];
      if (!isNone(this.args.onChangeSelection)) {
        this.args.onChangeSelection(selected);
      }
    } else if (this.mode == 'multiple') {
      selected = this.map((date) => date.clone());
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
      if (!isNone(this.args.onChangeSelection)) {
        this.args.onChangeSelection(selected);
      }
    } else if (this.mode == 'range') {
      let isChangingStart =
        isNone(this.localRangeStart) || !isNone(this.localRangeFinish);

      if (isChangingStart) {
        this.localRangeStart = day.date;
        this.localRangeFinish = undefined;
      } else {
        if (day.date.isBefore(this.localRangeStart)) {
          this.localRangeFinish = this.localRangeStart;
          this.localRangeStart = day.date;
        } else {
          this.localRangeFinish = day.date;
        }

        if (!isNone(this.args.onChangeRange)) {
          this.args.onChangeRange(this.localRangeStart, this.localRangeFinish);
        }
      }
    }
  }

  /**
   *
   * @param owner
   * @param args
   */
  constructor(owner: any, args: any) {
    super(owner, args);
    this.localRangeStart = this.args.rangeStart;
    this.localRangeFinish = this.args.rangeFinish;
  }
}
