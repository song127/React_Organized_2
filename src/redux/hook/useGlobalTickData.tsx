import { useAppSelector } from "@/redux/hook/useAppSelector";
import { selectTickDataState } from "@/redux/store/rootSetting";

export const useGlobalTickData = () => {
  return useAppSelector(selectTickDataState);
};
