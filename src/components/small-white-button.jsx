import styled from "styled-components";
import { colors } from "../../../Dexam-FE/src/design-token";

export const SmallWhiteButton = ({
  title,
  width = "80px",
  color = colors.gray[500],
  backgroundColor = "#FFFFFF",
  borderColor = colors.green[300],
  onClick,
}) => {
  return (
    <SmallWhiteButtonWrapper
      $width={width}
      $color={color}
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
      onClick={onClick}
    >
      {title}
    </SmallWhiteButtonWrapper>
  );
};

const SmallWhiteButtonWrapper = styled.button`
  width: ${({ $width }) => $width};
  padding: 15px 0;
  border-radius: 14px;
  background: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $color }) => $color};
  border: 1px solid ${({ $borderColor }) => $borderColor};
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;   

export default SmallWhiteButton;