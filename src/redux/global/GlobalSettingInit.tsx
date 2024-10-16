import ScrollToTop from "@/components/actions/ScrollTop";
import { GlobalTickDataInit } from "@/redux/global/GlobalTickDataInit";

export const GlobalSettigInit = () => {
  return (
    <>
      <ScrollToTop />
      <GlobalTickDataInit />
    </>
  );
};
