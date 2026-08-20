import MyPage from "./pages/my-page/MyPage";
import { GlobalStyle } from "./design-token";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <MyPage />
    </>
  );
};
