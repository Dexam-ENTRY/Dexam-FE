import styled from "styled-components";
import { colors } from "../../../Dexam-FE/src/design-token";

export const SmallRedButton = ({
  title,
  width = "100px",
  color = colors.red[500],
  backgroundColor = colors.red[300],
  borderColor = colors.red[400],
  onClick,
}) => {
  return (
    <SmallRedButtonWrapper
      $width={width}
      $color={color}
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
      onClick={onClick}
    >
      {title}
    </SmallRedButtonWrapper>
  );
};

const SmallRedButtonWrapper = styled.button`
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

export default SmallRedButton;