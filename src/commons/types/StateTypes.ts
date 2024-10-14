export enum StateEnum {
  NONE = "NONE",
  DEFAULT = "DEFAULT",
  SUCCESS = "SUCCESS",
  WARNING = "WARNING",
  ERROR = "ERROR",
}

export type StateEnumType = (typeof StateEnum)[keyof typeof StateEnum];
