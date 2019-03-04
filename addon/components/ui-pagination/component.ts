import Component from "@ember/component";
// @ts-ignore: Ignore import of compiled template
import template from "./template";
import { localClassNames } from "ember-css-modules";
import { layout } from "@ember-decorators/component";
import { gt } from "@ember-decorators/object/computed";
import { computed, action } from "@ember-decorators/object";

@localClassNames("ui-pagination")
@layout(template)
export default class UiPagination extends Component {
  start!: number;
  count!: number;
  total!: number;
  onChangeStart!: any;

  @gt("start", 0) showPrevious!: boolean;

  @computed("start", "count", "total")
  get showNext(): boolean {
    return this.start + this.count < this.total;
  }

  @computed("start", "count", "total")
  get currentPagination(): any {
    let max = Math.min(this.start + this.count, this.total);
    return {
      label: `${this.start + 1} - ${max} of ${this.total}`
    };
  }

  @computed("start", "count", "total")
  get paginationOptions(): object[] {
    let pages: any[] = [];
    for (let i = 0; i < this.total; i += this.count) {
      let max = Math.min(i + this.count, this.total);

      pages.push({
        label: `${i + 1} - ${max}`,
        value: i
      });
    }
    return pages;
  }

  @action
  onNext() {
    if (this.start + this.count > this.total) {
      return;
    }
    this.onChangeStart(this.start + this.count);
  }

  @action
  onPrevious() {
    if (this.start - this.count < 0) {
      return;
    }
    this.onChangeStart(this.start - this.count);
  }

  @action
  onSetPage(pageOption: any) {
    this.onChangeStart(pageOption.value);
  }
}
