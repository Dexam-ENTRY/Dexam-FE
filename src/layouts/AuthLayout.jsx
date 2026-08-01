import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../design-token";

export const AuthLayout = () => {
  return (
    <div>
      <Outlet />
      <GlobalStyle />
    </div>
  );
};
