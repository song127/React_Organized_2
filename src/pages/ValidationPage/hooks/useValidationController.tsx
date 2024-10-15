import { useCallback, useState } from "react";

import { DEFAULTS } from "@/commons/constants";
import { validateInput } from "@/pages/ValidationPage/logics/validation";
import { ValidationCaseEnum, ValidationError } from "@/types/domain/ValidationTypes";
import debounce from "@/utils/customObjects/CustomDebounce";

export default function useValidationController() {
  const [isTyping, setIsTyping] = useState(false);

  const [isLoadingValidation, setIsLoadingValidation] = useState(false);

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const [error, setError] = useState<ValidationError | null>(null);

  const [isValidationSuccess, setIsValidationSuccess] = useState(false);

  const changeInput1Handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTyping(true);
    setInput1(e.target.value);

    debounceCheckValidation({ input1Value: e.target.value });
  }, []);

  const changeInput2Handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTyping(true);
    setInput2(e.target.value);

    debounceCheckValidation({ input2Value: e.target.value });
  }, []);

  const changeInput3Handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTyping(true);
    setInput3(e.target.value);

    debounceCheckValidation({ input3Value: e.target.value });
  }, []);

  const checkValidation = useCallback(
    ({ input1Value = input1, input2Value = input2, input3Value = input3 }) => {
      setIsLoadingValidation(true);

      const error = validateInput(input1Value, input2Value, input3Value);

      setError(error);

      if (error.case === ValidationCaseEnum.ALL_VALID) {
        setIsValidationSuccess(true);
      } else {
        setIsValidationSuccess(false);
      }

      setIsLoadingValidation(false);
    },
    [input1, input2, input3],
  );

  const debounceCheckValidation = useCallback(
    debounce((...args: Parameters<typeof checkValidation>) => {
      checkValidation(...args);
      setIsTyping(false);
    }, DEFAULTS.TYPING_WAITING_TIME),
    [checkValidation],
  );

  return {
    input1,
    input2,
    input3,
    changeInput1Handler,
    changeInput2Handler,
    changeInput3Handler,

    isTyping,
    isLoadingValidation,
    error,
    isValidationSuccess,
  };
}
