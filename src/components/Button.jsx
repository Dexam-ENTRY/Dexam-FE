import styled from "styled-components";
import { colors } from "../../../Dexam-FE/src/design-token";

export const Button = ({
  title,
  width = "350px",
  color = colors.white[500],
  backgroundColor = colors.green[500],
  borderColor = colors.green[50],
  onClick,
}) => {
  return (
    <ButtonWrapper
      $width={width}
      $color={color}
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
      onClick={onClick}
    >
      {title}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  width: ${({ $width }) => $width};
  padding: 18px 0;
  border-radius: 14px;
  background: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $color }) => $color};
  border: 1px solid ${({ $borderColor }) => $borderColor};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;
