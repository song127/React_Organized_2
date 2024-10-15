import { useEffect, useRef } from "react";

import { DEFAULTS } from "@/commons/constants";
import { useAppDispatch } from "@/redux/hook/useAppDispatch";
import { fetchTickData } from "@/redux/slice/tickDataSlice";

export const GlobalTickDataInit = () => {
  const dispatch = useAppDispatch();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const intervalAction = async () => {
    try {
      await dispatch(fetchTickData({ data: new Date().toISOString() })).unwrap();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // add check condition of values here
    // if (condition) { return; }

    console.log("GlobalTickDataInit useEffect");

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalAction();
    intervalRef.current = setInterval(() => {
      intervalAction();
    }, DEFAULTS.PREVENT_WEBSOCKET_NOT_CONNECT_INTERVAL);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    // }, [condition]);
  }, [dispatch]);

  return null;
};
