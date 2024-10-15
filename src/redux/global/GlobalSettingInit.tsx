import ScrollToTop from "@/components/actions/ScrollTop";
import { GlobalModalManager } from "@/redux/global/GlobalModalManager";

export const GlobalSettigInit = () => {
  return (
    <>
      <ScrollToTop />
      <GlobalModalManager />
    </>
  );
};
