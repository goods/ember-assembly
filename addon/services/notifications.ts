import Service from "@ember/service";

interface NotificationParams {
  title: string;
  description?: string;
  intent: "info" | "success" | "warning" | "danger";
  timeout?: number;
}

export default class Notifications extends Service {
  notifications: any = [];

  nextId: number = 0;

  createNotification({
    title,
    description = "",
    intent = "info",
    timeout = 5000,
  }: NotificationParams) {
    let id = this.get("nextId");
    this.notifications.pushObject({
      id,
      title: title,
      description: description,
      intent: intent,
      timeout: timeout,
    });

    this.incrementProperty("nextId");
  }

  destroyNotification(notification: any) {
    this.notifications.removeObject(notification);
  }
}

declare module "@ember/service" {
  interface Registry {
    notifications: Notifications;
  }
}
