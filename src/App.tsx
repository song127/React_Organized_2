import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "@/components/actions/ScrollTop";
import GlobalStyle from "@/styles/global/globalStyle";

import MainPage from "./pages/MainPage";
import { ROUTES } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      {/* <Header /> */}
      <Routes>
        <Route path={ROUTES.MAIN} element={<MainPage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
