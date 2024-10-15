import RectangleBtn from "@/components/commons/btns/RectangleBtn";
import BasicLayout from "@/components/layouts/BasicLayout";
import InnerLayout from "@/components/layouts/InnerLayout";
import Gap from "@/components/utils/Gap";
import SizedBox from "@/components/utils/SizedBox";
import { useAppDispatch } from "@/redux/hook/useAppDispatch";
import { openModal } from "@/redux/slice/modalSlice";
import COLORS from "@/styles/global/globalColor";
import { ModalPropsMap, ModalType } from "@/types/domain/ModalTypes";

export default function ModalPage() {
  const dispatch = useAppDispatch();

  return (
    <BasicLayout>
      <InnerLayout>
        <h1>Modal Page</h1>

        <Gap h={20} />
        <SizedBox w={"18.75rem"} h={"2.5rem"}>
          <RectangleBtn
            backColor={COLORS.blue_10}
            round="0.5rem"
            onClick={() => {
              dispatch(
                openModal({
                  modalType: ModalType.BASIC,
                  modalProps: {
                    title: "Basic Modal",
                    onClose: () => {
                      console.log("Modal Closed");
                    },
                  } as ModalPropsMap["BASIC"],
                }),
              );
            }}>
            <span>Show Basic Modal</span>
          </RectangleBtn>
        </SizedBox>
      </InnerLayout>
    </BasicLayout>
  );
}
