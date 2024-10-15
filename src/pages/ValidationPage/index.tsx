import BasicInput from "@/components/commons/inputs/BasicInput";
import BasicLayout from "@/components/layouts/BasicLayout";
import InnerLayout from "@/components/layouts/InnerLayout";
import Gap from "@/components/utils/Gap";
import useValidationController from "@/pages/ValidationPage/hooks/useValidationController";

export default function ValidationPage() {
  const validationController = useValidationController();

  return (
    <BasicLayout>
      <InnerLayout>
        <BasicInput
          value={validationController.input1}
          setValue={validationController.changeInput1Handler}
        />
        <BasicInput
          value={validationController.input2}
          setValue={validationController.changeInput2Handler}
        />
        <BasicInput
          value={validationController.input3}
          setValue={validationController.changeInput3Handler}
        />

        <Gap h={10} />
        <span>{validationController.isLoadingValidation ? "Loading..." : "Validation Result"}</span>
        <Gap h={10} />
        <span>isValidationSuccess = {validationController.isValidationSuccess.toString()}</span>
        <Gap h={10} />
        <span>isTyping = {validationController.isTyping.toString()}</span>
        <Gap h={10} />
        <span>msg = {validationController.error?.message.toString()}</span>
        <span>case = {validationController.error?.case.toString()}</span>
        <span>target = {validationController.error?.target.toString()}</span>
      </InnerLayout>
    </BasicLayout>
  );
}
