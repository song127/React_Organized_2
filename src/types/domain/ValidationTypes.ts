export enum ValidationErrorTargetEnum {
  NONE = "NONE",
  INPUT1 = "INPUT1",
  INPUT2 = "INPUT2",
  INPUT3 = "INPUT3",
  ALL_VALID = "ALL_VALID",
}

export enum ValidationCaseEnum {
  NONE = "NONE",
  EMPTY = "EMPTY",
  INVALID_INPUT1 = "INVALID_INPUT1",
  INVALID_INPUT2 = "INVALID_INPUT2",
  INVALID_INPUT3 = "INVALID_INPUT3",
  ALL_VALID = "ALL_VALID",
}

export const VALIDATION_ERROR_MESSAGES = {
  [ValidationCaseEnum.EMPTY]: "Enter a value",
  [ValidationCaseEnum.INVALID_INPUT1]: "Please enter a valid input1",
  [ValidationCaseEnum.INVALID_INPUT2]: "Please enter a valid input2",
  [ValidationCaseEnum.INVALID_INPUT3]: "Please enter a valid input3",
};

export interface ValidationError {
  target: ValidationErrorTargetEnum;
  case: ValidationCaseEnum;
  message: string;
}
