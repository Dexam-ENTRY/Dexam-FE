import styled from "@emotion/styled";
import { colors } from "../design-token";
import { Header } from "./Header";
export const ExamSubjectList = ({
  width = "500px",
  height = "150px",
  backgroundColor = colors.green[100],
  color = "#000000",
  title,
  borderColor = colors.ivory[500],
  listColor = colors.green[500],
  subjectList,
}) => {
  return (
    <>
      <Header />
      <ExamSubjectListWrapper
        $backgroundColor={backgroundColor}
        $color={color}
        $width={width}
        $height={height}
        $borderColor={borderColor}
      >
        <LeftText>
          <Title $color={color} $title={title}>
            {title}
          </Title>
          <ListName $listColor={listColor}>{subjectList}</ListName>
        </LeftText>
      </ExamSubjectListWrapper>
    </>
  );
};

const ExamSubjectListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $color }) => $color};
  width: ${({ $width }) => $width};
  border: 1px solid ${({ $borderColor }) => $borderColor};
  height: ${({ $height }) => $height};
  box-sizing: border-box;
`;

const LeftText = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  padding: 30px 30px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 400;
`;

const ListName = styled.div`
  font-size: 17px;
  color: ${({ $listColor }) => $listColor};
`;
