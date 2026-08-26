import { Header } from "../components";
import styled from "styled-components";
import { ExamSubject } from "../components/ExamSubject";
import { DetailSchedule } from "../components";
import { Input } from "../components";

export const ExaminquiryPage = () => {
  return (
    <>
      <Header title="시험목록조회" modeText="관리자" />
      <ExaminquiryWrapper>
        <DetailSchedule
          subjectTitle="영어"
          subjectName="영어"
          startDate="2026.08.17"
          endDate="2026.08.29"
        />
        <Input />
        <ExamSubject title="tlgja" subjectList="dfd"/>
      </ExaminquiryWrapper>
    </>
  );
};

const ExaminquiryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  top: 100px;
  margin-top: 150px;
  width: 100vw;
  box-sizing: border-box;
  padding-left: 100px;
`;
