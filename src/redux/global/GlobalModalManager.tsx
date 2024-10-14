import { lazy, Suspense } from "react";

import { ModalType } from "@/commons/types/ModalTypes";
import { useGlobalModal } from "@/redux/hook/useGlobalModal";

// React.lazy를 사용하여 모달 컴포넌트 동적 임포트
const BasicModal = lazy(() => import("@/components/modals/BasicModal"));

// 모달 컴포넌트 매핑
const MODAL_COMPONENTS: Record<ModalType, React.LazyExoticComponent<React.FC<any>>> = {
  BASIC: BasicModal,
};

export function GlobalModalManager() {
  const { modals } = useGlobalModal();

  if (modals.length === 0) return null;

  return (
    <>
      {modals.map((modal, index) => {
        const SpecificModal = MODAL_COMPONENTS[modal.modalType];
        return (
          <div
            key={index}
            className="modal-overlay"
            style={{ zIndex: 1000 + index }} // zIndex 조정
          >
            <Suspense fallback={<div>Loading...</div>}>
              <SpecificModal {...modal.modalProps} />
            </Suspense>
          </div>
        );
      })}
    </>
  );
}
