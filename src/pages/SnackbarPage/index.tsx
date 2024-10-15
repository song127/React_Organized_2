import RectangleBtn from "@/components/commons/btns/RectangleBtn";
import BasicLayout from "@/components/layouts/BasicLayout";
import InnerLayout from "@/components/layouts/InnerLayout";
import Gap from "@/components/utils/Gap";
import SizedBox from "@/components/utils/SizedBox";
import COLORS from "@/styles/global/globalColor";
import { showSnackbar } from "@/utils/actions";

export default function SnackbarPage() {
  return (
    <BasicLayout>
      <InnerLayout>
        <h1>Snackbar Page</h1>

        <Gap h={20} />
        <SizedBox w={"18.75rem"} h={"2.5rem"}>
          <RectangleBtn
            backColor={COLORS.blue_10}
            round="0.5rem"
            onClick={() => {
              showSnackbar("success", "Success Message");
            }}>
            <span>Show Success Snackbar</span>
          </RectangleBtn>
        </SizedBox>

        <Gap h={10} />
        <SizedBox w={"18.75rem"} h={"2.5rem"}>
          <RectangleBtn
            backColor={COLORS.blue_10}
            round="0.5rem"
            onClick={() => {
              showSnackbar("error", "Error Message");
            }}>
            <span>Show Error Snackbar</span>
          </RectangleBtn>
        </SizedBox>

        <Gap h={10} />
        <SizedBox w={"18.75rem"} h={"2.5rem"}>
          <RectangleBtn
            backColor={COLORS.blue_10}
            round="0.5rem"
            onClick={() => {
              showSnackbar("warning", "Warning Message");
            }}>
            <span>Show Warning Snackbar</span>
          </RectangleBtn>
        </SizedBox>

        <Gap h={10} />
        <SizedBox w={"18.75rem"} h={"2.5rem"}>
          <RectangleBtn
            backColor={COLORS.blue_10}
            round="0.5rem"
            onClick={() => {
              showSnackbar("info", "Info Message");
            }}>
            <span>Show Info Snackbar</span>
          </RectangleBtn>
        </SizedBox>
      </InnerLayout>
    </BasicLayout>
  );
}
