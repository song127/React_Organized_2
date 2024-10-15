import {
  VALIDATION_ERROR_MESSAGES,
  ValidationCaseEnum,
  ValidationError,
  ValidationErrorTargetEnum,
} from "@/types/domain/ValidationTypes";

export const validateInput = (input1: string, input2: string, input3: string): ValidationError => {
  if (input1 === "" || input2 === "" || input3 === "") {
    return {
      target:
        input1 === ""
          ? ValidationErrorTargetEnum.INPUT1
          : input2 === ""
            ? ValidationErrorTargetEnum.INPUT2
            : ValidationErrorTargetEnum.INPUT3,
      case: ValidationCaseEnum.EMPTY,
      message: VALIDATION_ERROR_MESSAGES[ValidationCaseEnum.EMPTY],
    };
  }

  if (input1 === "invalid") {
    return {
      target: ValidationErrorTargetEnum.INPUT1,
      case: ValidationCaseEnum.INVALID_INPUT1,
      message: VALIDATION_ERROR_MESSAGES[ValidationCaseEnum.INVALID_INPUT1],
    };
  }

  if (input2 === "invalid") {
    return {
      target: ValidationErrorTargetEnum.INPUT2,
      case: ValidationCaseEnum.INVALID_INPUT2,
      message: VALIDATION_ERROR_MESSAGES[ValidationCaseEnum.INVALID_INPUT2],
    };
  }

  if (input3 === "invalid") {
    return {
      target: ValidationErrorTargetEnum.INPUT3,
      case: ValidationCaseEnum.INVALID_INPUT3,
      message: VALIDATION_ERROR_MESSAGES[ValidationCaseEnum.INVALID_INPUT3],
    };
  }

  return {
    target: ValidationErrorTargetEnum.ALL_VALID,
    case: ValidationCaseEnum.ALL_VALID,
    message: "",
  };
};
