import { lazy, Suspense } from "react";

import { createPortal } from "react-dom";

import { useGlobalModal } from "@/redux/hook/useGlobalModal";
import { ModalType } from "@/types/domain/ModalTypes";

// React.lazy를 사용하여 모달 컴포넌트 동적 임포트
const BasicModal = lazy(() => import("@/components/modals/BasicModal"));

// 모달 컴포넌트 매핑
const MODAL_COMPONENTS: Record<ModalType, React.LazyExoticComponent<React.FC<any>>> = {
  BASIC: BasicModal,
};

export function GlobalModalManager() {
  const { modals } = useGlobalModal();

  if (modals.length === 0) return null;

  return createPortal(
    <>
      {modals.map((modal, index) => {
        const SpecificModal = MODAL_COMPONENTS[modal.modalType];
        return (
          <div
            key={index}
            style={{ zIndex: 1000 + index }} // zIndex 조정
          >
            <Suspense fallback={<></>}>
              <SpecificModal {...modal.modalProps} />
            </Suspense>
          </div>
        );
      })}
    </>,
    document.body,
  );
}
