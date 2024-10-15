import { useAppDispatch } from "@/redux/hook/useAppDispatch";
import { useGlobalTickData } from "@/redux/hook/useGlobalTickData";
import { fetchTickData } from "@/redux/slice/tickDataSlice";

export const useTickData = () => {
  const dispatch = useAppDispatch();

  const { tickData, isLoadingTickData } = useGlobalTickData();

  return {
    tickData,
    isLoadingTickData,
    setTickData: () => dispatch(fetchTickData({ data: new Date().toISOString() })).unwrap(),
  };
};
