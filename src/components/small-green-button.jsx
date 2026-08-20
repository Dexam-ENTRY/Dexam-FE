import styled from "styled-components";
import { colors } from "../../../Dexam-FE/src/design-token";

export const SmallGreenButton = ({
  title,
  width = "100px",
  color = colors.white[500],
  backgroundColor = colors.green[300],
  borderColor = colors.green[50],
  onClick,
}) => {
  return (
    <SmallGreenButtonWrapper
      $width={width}
      $color={color}
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
      onClick={onClick}
    >
      {title}
    </SmallGreenButtonWrapper>
  );
};

const SmallGreenButtonWrapper = styled.button`
  width: ${({ $width }) => $width};
  padding: 18px 0;
  border-radius: 14px;
  background: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $color }) => $color};
  border: 1px solid ${({ $borderColor }) => $borderColor};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;

`;   

export default SmallGreenButton;