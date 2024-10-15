import { useAppSelector } from "@/redux/hook/useAppSelector";
import { selectModalState } from "@/redux/store/rootSetting";

export const useGlobalModal = () => {
  return useAppSelector(selectModalState);
};
