import styled from "styled-components";
import { colors } from "../design-token";
import { LuDot } from "react-icons/lu";
export const DetailSchedule = ({
  width = "1300px",
  height = "120px",
  subjectTitle,
  subjectName,
  startDate,
  endDate,
  backgroundColor = colors.white[500],
}) => {
  return (
    <DetailScheduleWrapper
      $width={width}
      $height={height}
      $backgroundColor={backgroundColor}
    >
      <SubjectTitleWrapper>
        <SubjectTitle>{subjectTitle}</SubjectTitle>
      </SubjectTitleWrapper>
      <SubjectName>{subjectName}</SubjectName>
      <LuDot />
      <ScheduleDate>
        {startDate}~{endDate}
      </ScheduleDate>
    </DetailScheduleWrapper>
  );
};

const DetailScheduleWrapper = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  padding: 10px;
  border: 1px solid #dce5de;
`;
const SubjectTitle = styled.div`
  display: flex;
  position: absolute;
  left: 40px;
  box-sizing: border-box;
  align-items: center;
  justify-content: start;
  font-size: 20px;
  color: #1f2925;
  font-weight: 400;
`;

const ScheduleDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6f7772;
`;

const SubjectName = styled.div`
  font-size: 16px;
  color: #6f7772;
`;

const SubjectTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
