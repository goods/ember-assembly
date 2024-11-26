import Component from '@ember/component';
//@ts-ignore
import template from './template';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject } from '@ember/service';
// @ts-ignore
import move from 'ember-animated/motions/move';
// @ts-ignore
import { fadeOut } from 'ember-animated/motions/opacity';

export default class UiNotifications extends Component {
  layout = template;
  tagName: string = '';

  @inject('notifications') service!: any;
  @alias('service.notifications') notifications!: any;

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
    this.service.destroyNotification(notification);
  }
}
