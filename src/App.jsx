import { RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./design-token";
import { router } from "./Router";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};