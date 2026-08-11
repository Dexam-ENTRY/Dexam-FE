import styled from "styled-components";
import { colors } from "../design-token";
import { FaArrowLeftLong } from "react-icons/fa6";

export const Header = ({ title, modeText, Color = colors.gray[600] }) => {
  return (
    <HeaderWrapper>
      <IconWrapper>
        <FaArrowLeftLong />
        <Title $Color={Color}>{title}</Title>
      </IconWrapper>
      <ModeWrapper>
        <Mode>
          <Circle></Circle>
          <ModeText>{modeText}</ModeText>
        </Mode>
      </ModeWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fffcf3;
  border: 1px solid #ffffff;
  position: fixed;
  top: 25px;
  left: 80px;
  right: 80px;
  z-index: 1000;
  height: auto;
`;

const IconWrapper=styled.div`
  display:flex;
  align-items:center;
  gap:10px;
`

const ModeWrapper = styled.div`
  display: flex;
  align-items: start;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${({ $Color }) => $Color};
  display: flex;
`;

const Mode = styled.div`
  background-color: #ffffff;
  width: 140px;
  height: 50px;
  border-radius: 30px;
  border: 1px solid #dce5de;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 20px;
`;

const Circle = styled.div`
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: #087a43;
`;

const ModeText = styled.div`
  font-size: 15px;
  color: #1f2925;
  padding-left: 10px;
`;
