import styled from "styled-components";
import { colors } from "../design-token";

export const Header = ({ title, Color = colors.gray[600] }) => {
  
  return (
    <HeaderWrapper>
      <Title $Color={Color}>{title}</Title>
      <Mode>
        <Circle>
          <></>
        </Circle>
      </Mode>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fffcf3;
  outline-color: #ffffff;
  margin: 0px;
  gap: 8px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: ${({ $Color }) => $Color};
`;

const Mode = styled.div`
  color: #ffffff;
  width: 140px;
  height: 50px;
  border-radius: 30px;
`;

const Circle = styled.div``;
