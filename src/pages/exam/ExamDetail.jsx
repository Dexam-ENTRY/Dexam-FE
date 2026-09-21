import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../design-token";

const examDetails = {
  3: {
    title: "2학기 중간고사",
    subject: "수학",
    date: "2026년 10월 14일 09:00",
    place: "1학년 1반 교실",
    description:
      "2학기 학습 내용을 바탕으로 진행하는 지필 평가입니다.",
  },
  4: {
    title: "영어 단원 평가",
    subject: "영어",
    date: "2026년 9월 11일 10:00",
    place: "1학년 1반 교실",
    description: "Unit 3 학습 내용을 평가합니다.",
  },
};

export const ExamDetail = () => {
  const { examId } = useParams();
  const exam = examDetails[examId] ?? examDetails[3];

  return (
    <Page>
      <Content>
        <BackLink to="/exam">
          ← 시험 / 수행평가 목록으로
        </BackLink>

        <Card>
          <Type>시험</Type>

          <Title>{exam.title}</Title>

          <Description>{exam.description}</Description>

          <Info>
            <InfoItem>
              <Label>과목</Label>
              <Value>{exam.subject}</Value>
            </InfoItem>

            <InfoItem>
              <Label>시험 일시</Label>
              <Value>{exam.date}</Value>
            </InfoItem>

            <InfoItem>
              <Label>장소</Label>
              <Value>{exam.place}</Value>
            </InfoItem>
          </Info>
        </Card>
      </Content>
    </Page>
  );
};

/* -------------------- Layout -------------------- */

const Page = styled.main`
  min-height: 100vh;

  background: ${colors.ivory[500]};
  color: ${colors.gray[500]};
`;

const Content = styled.section`
  width: 960px;
  margin: 0 auto;
  padding: 64px 0;
`;

/* -------------------- Back -------------------- */

const BackLink = styled(Link)`
  display: inline-block;

  color: ${colors.green[500]};
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;

  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.7;
  }
`;

/* -------------------- Card -------------------- */

const Card = styled.article`
  margin-top: 28px;
  padding: 42px;

  border: 1px solid ${colors.green[300]};
  border-radius: 18px;

  background: ${colors.white[500]};
`;

const Type = styled.span`
  display: inline-flex;
  align-items: center;

  padding: 7px 11px;

  border-radius: 7px;

  background: ${colors.red[300]};
  color: ${colors.red[500]};

  font-size: 13px;
  font-weight: 700;
`;

const Title = styled.h1`
  margin: 16px 0 10px;

  color: ${colors.gray[500]};
  font-size: 32px;
  font-weight: 800;
  letter-spacing: -0.8px;
`;

const Description = styled.p`
  margin: 0;

  color: ${colors.gray[400]};
  font-size: 15px;
  line-height: 1.7;
`;

/* -------------------- Information -------------------- */

const Info = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  margin: 36px 0 0;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  padding: 20px;

  border-radius: 12px;

  background: ${colors.green[200]};
`;

const Label = styled.dt`
  color: ${colors.gray[400]};
  font-size: 12px;
  font-weight: 600;
`;

const Value = styled.dd`
  margin: 0;

  color: ${colors.gray[500]};
  font-size: 15px;
  font-weight: 700;
`;