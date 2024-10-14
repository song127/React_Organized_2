import { selectModalState } from "@/redux/store/rootSetting";

import { useAppSelector } from "./useAppSelector";

export const useGlobalModal = () => {
  return useAppSelector(selectModalState);
};
