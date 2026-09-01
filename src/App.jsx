import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./design-token";
import { ExamDetail } from "./pages/exam/ExamDetail";

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ExamDetail></ExamDetail>
    </BrowserRouter>
  );
};