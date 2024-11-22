import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject } from '@ember/service';
// @ts-ignore
import move from 'ember-animated/motions/move';
// @ts-ignore
import { fadeOut } from 'ember-animated/motions/opacity';

interface AsmUiNotificationsArgs {}

export default class AsmUiNotifications extends Component<AsmUiNotificationsArgs> {
  @inject('notifications') declare notificationsService: any;

  get notifications() {
    return this.notificationsService.notifications;
  }

  *transition({ insertedSprites, removedSprites, keptSprites }: any) {
    for (let sprite of insertedSprites) {
      sprite.startTranslatedBy(0, -sprite.finalBounds.height);
      move(sprite);
    }
    for (let sprite of keptSprites) {
      move(sprite);
    }
    for (let sprite of removedSprites) {
      fadeOut(sprite);
    }
  }

  @action
  onDestroyNotification(notification: any) {
    this.notificationsService.destroyNotification(notification);
  }
}
