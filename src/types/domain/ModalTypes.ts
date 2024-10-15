export enum ModalType {
  BASIC = "BASIC",
}

// 각 모달 타입에 대한 props 인터페이스 정의
export interface ModalPropsMap {
  [ModalType.BASIC]: {
    title: string;
    onClose: () => void;
  };
}

// 특정 모달 타입에 맞는 props 타입
export type SpecificModalProps<T extends ModalType> = ModalPropsMap[T];
