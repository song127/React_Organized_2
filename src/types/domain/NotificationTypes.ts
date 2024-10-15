export interface NotificationType {
  id: string;
  title: string;
  message: string;
}

export enum NotificationActionEnum {
  // common action
  ERROR = "error",
  // notification action
  ALARM_1 = "alarm_1",
  ALARM_2 = "alarm_2",
  ALARM_3 = "alarm_3",
  // inner action
  SET_STATUS = "set_status",
}

export enum NotificationStatusEnum {
  SUCCESS = "success",
  FAILED = "failed",
}

export enum NotificationChannelEnum {
  // Query actions
  // Basic actions
  QUERY_DEPOSIT = "QUERY:DEPOSIT",
  QUERY_WITHDRAW = "QUERY:WITHDRAW",
  QUERY_SWAP = "QUERY:SWAP",
  // Collateral actions
  QUERY_COLLATERAL_INCREASE = "QUERY:COLLATERAL:INCREASE",
  QUERY_COLLATERAL_DECREASE = "QUERY:COLLATERAL:DECREASE",
  // Limit order actions
  QUERY_LIMIT_ORDER_CREATE = "QUERY:LIMIT:CREATE",
  QUERY_LIMIT_ORDER_CANCEL = "QUERY:LIMIT:CANCEL",
  // Market actions
  QUERY_MARKET_OPEN = "QUERY:MARKET:OPEN",
  QUERY_MARKET_CLOSE = "QUERY:MARKET:CLOSE",
  // Event actions
  EVENT_CHECKIN = "EVENT:CHECKIN",
  // Execute actions
  EXECUTE_INCREASE = "EXECUTE:INCREASE:",
  EXECUTE_DECREASE = "EXECUTE:DECREASE",
}

export type NotificationChannelType = keyof typeof NotificationChannelEnum;
