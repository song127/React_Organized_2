import { Middleware } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";

import { ERR_MSGS } from "@/commons/constants";
import { ENVS } from "@/commons/envConfig";
import { setNotification } from "@/redux/slice/notificationSlice";
import { RootState } from "@/redux/store/rootSetting";
import { ErrorEnum } from "@/types/domain/ErrorTypes";
import {
  NotificationActionEnum,
  NotificationChannelEnum,
  NotificationStatusEnum,
  NotificationType,
} from "@/types/domain/NotificationTypes";
import { showSnackbar } from "@/utils/actions";

const notificationMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
  let socket: Socket | null = null;

  const handleNotification = (data: any, channel: string, message: string) => {
    console.log("data : ", data);
    const parsedMessage = JSON.parse(message);

    const { action, result } = getNotificationDetails(channel, parsedMessage.status);
    const formattedMessage = formatMessage(action, result);

    store.dispatch(
      setNotification({
        id: new Date().getTime().toString(),
        message: "message",
        title: "title",
      } as NotificationType),
    );

    showSnackbar(result === NotificationStatusEnum.SUCCESS ? "success" : "error", formattedMessage);
  };

  const handleSocketError = (error: any) => {
    console.error(error);
    showSnackbar("error", ERR_MSGS[ErrorEnum.WEBSOCKET_ERROR]);
  };

  return (next: any) => (action: any) => {
    // 특정 액션에 반응해서 소켓을 연결하고, 이벤트를 받아 처리하는 로직
    if (action.type === "modal") {
      if (socket) socket.close();

      // const payload = action.payload;

      socket = io(ENVS.WEBSOCKET_URL || "");
      socket.on("error", handleSocketError);

      Object.values(NotificationChannelEnum).forEach((channel) => {
        socket?.on(channel, (message) => handleNotification("", channel, message));
      });
    }

    return next(action);
  };
};

function getNotificationDetails(channel: string, status: string) {
  const parts = channel.split(":");
  let action: NotificationActionEnum = NotificationActionEnum.ERROR;
  let result: NotificationStatusEnum = NotificationStatusEnum.FAILED;

  if (parts.length === 0) {
    return { action, result };
  }

  const [type, ...rest] = parts;

  switch (type) {
    case "QUERY": {
      const queryActionKey = rest.join("_") as keyof typeof NotificationActionEnum;
      action = NotificationActionEnum[queryActionKey] || NotificationActionEnum.ERROR;
      break;
    }
    // case "EXECUTE":
    //   action = NotificationActionEnum.ORDER_EXECUTION;
    //   break;
    // case "EVENT": {
    //   const eventActionKey = rest.join("_") as keyof typeof NotificationAction;
    //   action = NotificationAction[eventActionKey] || NotificationAction.ERROR;
    //   break;
    // }
    default:
      action = NotificationActionEnum.ERROR;
  }

  result =
    parseInt(status, 10) === 20 ? NotificationStatusEnum.SUCCESS : NotificationStatusEnum.FAILED;

  return { action, result };
}

function formatMessage(action: NotificationActionEnum, status: NotificationStatusEnum) {
  const baseMessages: Record<NotificationActionEnum, string> = {
    [NotificationActionEnum.ERROR]: "Something went wrong!",
    [NotificationActionEnum.ALARM_1]: "Alarm 1",
    [NotificationActionEnum.ALARM_2]: "Alarm 2",
    [NotificationActionEnum.ALARM_3]: "Alarm 3",
    [NotificationActionEnum.SET_STATUS]: "Setting Status",
  };

  const baseMessage = baseMessages[action] || "Processing";

  if (action === NotificationActionEnum.ERROR) {
    return baseMessage;
  }

  if (status === NotificationStatusEnum.SUCCESS) {
    return `${baseMessage} is completed successfully`;
  } else {
    return `${baseMessage} is failed`;
  }
}

export default notificationMiddleware;
