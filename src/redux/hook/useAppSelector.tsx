import { TypedUseSelectorHook, useSelector } from "react-redux";

import { RootState } from "@/redux/store/rootSetting";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
