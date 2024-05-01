import ScrollToTop from "@components/actions/ScrollTop";
import GlobalStyle from "@styles/global/globalStyle";
import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      {/* <Header /> */}
      <Routes>
        {/* <Route path={ROUTES.main} element={<MainPage />} />
            <Route path={ROUTES.test} element={<TestPage />} />
            <Route path={ROUTES.button} element={<BtnPage />} />
            <Route path={ROUTES.input} element={<InputPage />} />
            <Route path={ROUTES.modal} element={<ModalPage />} />
            <Route path={ROUTES.special} element={<SpecialPage />} />
            <Route path={ROUTES.profile} element={Auth(<ProfilePage />)} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
