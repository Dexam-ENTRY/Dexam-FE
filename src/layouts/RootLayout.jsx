import { Outlet } from "react-router-dom";
import { Header } from "../components";
import styled from "styled-components";
import { GlobalStyle } from "../design-token";

export const RootLayout = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

const Main = styled.main`
  margin-top: 68px;
  width: 100vw;
`;
