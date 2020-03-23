import Component from "@ember/component";
//@ts-ignore
import template from "./template";
import { layout } from "@ember-decorators/component";
import { action } from "@ember/object";
import { alias } from "@ember/object/computed";
import { inject } from "@ember/service";
import { localClassNames } from "ember-css-modules";
import Notifications from "dummy/services/notifications";
import move from "ember-animated/motions/move";
import { fadeOut } from "ember-animated/motions/opacity";

@localClassNames("ui-notifications")
@layout(template)
export default class UiNotifications extends Component {
  @inject("notifications") service!: Notifications;
  @alias("service.notifications") notifications!: any;

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
