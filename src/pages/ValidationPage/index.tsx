import BasicInput from "@/components/commons/inputs/BasicInput";
import BasicLayout from "@/components/layouts/BasicLayout";
import InnerLayout from "@/components/layouts/InnerLayout";
import Gap from "@/components/utils/Gap";
import useValidationController from "@/pages/ValidationPage/hooks/useValidationController";

export default function ValidationPage() {
  const controller = useValidationController();

  return (
    <BasicLayout>
      <InnerLayout>
        <BasicInput value={controller.input1} setValue={controller.changeInput1Handler} />
        <BasicInput value={controller.input2} setValue={controller.changeInput2Handler} />
        <BasicInput value={controller.input3} setValue={controller.changeInput3Handler} />

        <Gap h={10} />
        <span>{controller.isLoadingValidation ? "Loading..." : "Validation Result"}</span>
        <Gap h={10} />
        <span>isValidationSuccess = {controller.isValidationSuccess.toString()}</span>
        <Gap h={10} />
        <span>isTyping = {controller.isTyping.toString()}</span>
        <Gap h={10} />
        <span>error = {controller.error?.message.toString()}</span>
        <span>error = {controller.error?.case.toString()}</span>
        <span>error = {controller.error?.target.toString()}</span>
      </InnerLayout>
    </BasicLayout>
  );
}
