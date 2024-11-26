import Component from '@ember/component';
import { get, set, action } from '@ember/object';
import { notEmpty } from '@ember/object/computed';
// @ts-ignore: Ignore import of compiled template
import template from './template';
// @ts-ignore
import { timeout } from 'ember-concurrency';
import { task } from 'ember-concurrency-decorators';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';

export default class UiNotification extends Component {
  layout = template;
  tagName: string = '';

  notification!: any;
  onDismiss!: Function;

  interval?: number = 20; //ms

  progress: number = 0;

  @computed('notification.intent')
  get intentClass(): string {
    return `intent-${this.notification.intent}`;
  }

  @notEmpty('notification.description')
  hasDescription!: boolean;

  @computed('notification.description')
  get safeDescription() {
    return htmlSafe(get(this.notification, 'description'));
  }

  @task
  progressTask = function* (
    this: UiNotification,
    notification: any,
    intervalMs: number
  ) {
    while (this.progress < 100) {
      yield timeout(intervalMs);
      let progressTotal =
        (this.progress * notification.timeout) / 100 + intervalMs;
      let progress = (progressTotal / notification.timeout) * 100;
      set(this, 'progress', progress);
    }
    this.onDismiss();
  };

  @action
  cancelProgress() {
    //@ts-ignore
    this.progressTask.cancelAll();
  }

  @action
  resumeProgress() {
    //@ts-ignore
    this.progressTask.perform(this.notification, this.interval);
  }

  init() {
    super.init();
    //@ts-ignore
    this.progressTask.perform(this.notification, this.interval);
  }
}
