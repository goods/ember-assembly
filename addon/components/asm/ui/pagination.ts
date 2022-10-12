import Component from '@glimmer/component';
import { action } from '@ember/object';

interface AsmUiPaginationArgs {
  start: number;
  count: number;
  total: number;
  onChangeStart: any;
}

export default class AsmUiPagination extends Component<AsmUiPaginationArgs> {
  get showPrevious(): boolean {
    return this.args.start > 0;
  }

  get showNext(): boolean {
    return this.args.start + this.args.count < this.args.total;
  }

  get currentPagination(): any {
    if (this.args.total == 0) {
      return {
        label: '0',
      };
    }
    let max = Math.min(this.args.start + this.args.count, this.args.total);
    return {
      label: `${this.args.start + 1} - ${max} of ${this.args.total}`,
    };
  }

  get paginationOptions(): any {
    let pages: any[] = [];
    for (let i = 0; i < this.args.total; i += this.args.count) {
      let max = Math.min(i + this.args.count, this.args.total);

      pages.push({
        label: `${i + 1} - ${max}`,
        value: i,
      });
    }
    return pages;
  }

  @action
  onNext() {
    if (this.args.start + this.args.count > this.args.total) {
      return;
    }
    this.args.onChangeStart(this.args.start + this.args.count);
  }

  @action
  onPrevious() {
    if (this.args.start - this.args.count < 0) {
      return;
    }
    this.args.onChangeStart(this.args.start - this.args.count);
  }

  @action
  onSetPage(pageOption: any) {
    this.args.onChangeStart(pageOption.value);
  }
}
