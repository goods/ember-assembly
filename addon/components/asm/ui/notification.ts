import Component from '@glimmer/component';
import { action } from '@ember/object';
import { task, timeout } from 'ember-concurrency';
import { htmlSafe } from '@ember/template';
import { tracked } from '@glimmer/tracking';

interface AsmUiNotificationArgs {
  notification: any;
  interval?: number;
  progress?: number;
  onDismiss: Function;
}

export default class AsmUiNotification extends Component<AsmUiNotificationArgs> {
  @tracked progress = 0;
  get interval(): number {
    return this.args.interval || 20;
  }
  get safeDescription() {
    return htmlSafe(this.args.notification.description);
  }
  progressTask = task(async (notification: any, intervalMs: number) => {
    while (this.progress < 100) {
      await timeout(intervalMs);
      let progressTotal =
        (this.progress * notification.timeout) / 100 + intervalMs;
      this.progress = (progressTotal / notification.timeout) * 100;
    }
    this.args.onDismiss();
  });
  @action
  cancelProgress() {
    this.progressTask.cancelAll();
  }
  @action
  resumeProgress() {
    this.progressTask.perform(this.args.notification, this.interval);
  }
  constructor(owner: any, args: AsmUiNotificationArgs) {
    super(owner, args);
    this.progressTask.perform(this.args.notification, this.interval);
  }
}
