import styled from "styled-components";
import { colors } from "../design-token";

export const Input = ({
  backgrounColor = colors.white[500],
  color = "#1F2925",
  label,
  borderColor = "#DCE5DE",
  inputText,
}) => {
  return (
    <InputWrapper>
      <Label $color={color}>{label}</Label>
      <InputBox $backgroundColor={backgrounColor} $borderColor={borderColor}>
        {inputText}
      </InputBox>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  color: ${({ $color }) => $color};
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border: 1px solid ${({ $borderColor }) => $borderColor};
`;
