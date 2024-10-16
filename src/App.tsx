import { closeSnackbar, SnackbarProvider } from "notistack";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CloseButton } from "@/components/commons/btns/CloseBtn";
import {
  SnackbarErrorUI,
  SnackbarInfoUI,
  SnackbarSuccessUI,
  SnackbarWarningUI,
} from "@/components/commons/snackbars/SnackbarUIs";
import Footer from "@/components/globals/Footer";
import Header from "@/components/globals/Header";
import MainPage from "@/pages/MainPage";
import ModalPage from "@/pages/ModalPage";
import SnackbarPage from "@/pages/SnackbarPage";
import ValidationPage from "@/pages/ValidationPage";
import { GlobalSettigInit } from "@/redux/global/GlobalSettingInit";
import { ROUTES } from "@/Routes";
import GlobalStyle from "@/styles/global/globalStyle";

function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider
        maxSnack={3}
        transitionDuration={{ enter: 300, exit: 300 }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        autoHideDuration={3000}
        action={(key) => <CloseButton size="small" onClick={() => closeSnackbar(key)} />}
        Components={{
          success: SnackbarSuccessUI,
          error: SnackbarErrorUI,
          warning: SnackbarWarningUI,
          info: SnackbarInfoUI,
        }}>
        <GlobalStyle />
        <GlobalSettigInit />
        <Header />
        <Routes>
          <Route path={ROUTES.MAIN} element={<MainPage />} />
          <Route path={ROUTES.SNACKBAR} element={<SnackbarPage />} />
          <Route path={ROUTES.VALIDATION} element={<ValidationPage />} />
          <Route path={ROUTES.MODAL} element={<ModalPage />} />
          <Route path={ROUTES.NOT_FOUND} element={<MainPage />} />
        </Routes>
        <Footer />
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
