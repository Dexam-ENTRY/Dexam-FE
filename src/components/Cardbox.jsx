import styled from "styled-components";
import { colors } from "../../../Dexam-FE/src/design-token";

export const CardBox = ({
  children,
  width = "700px",
  height = "auto",
  backgroundColor = colors.white[500],
}) => {
  return (
    <CardBoxWrapper
      $width={width}
      $height={height}
      $backgroundColor={backgroundColor}
    >
      {children}
    </CardBoxWrapper>
  );
};

const CardBoxWrapper = styled.div`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: 32px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  gap: 50px;
`;
