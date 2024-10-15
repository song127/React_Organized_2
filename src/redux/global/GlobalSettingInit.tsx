import ScrollToTop from "@/components/actions/ScrollTop";
import { GlobalModalManager } from "@/redux/global/GlobalModalManager";
import { GlobalTickDataInit } from "@/redux/global/GlobalTickDataInit";

export const GlobalSettigInit = () => {
  return (
    <>
      <ScrollToTop />
      <GlobalModalManager />
      <GlobalTickDataInit />
    </>
  );
};
