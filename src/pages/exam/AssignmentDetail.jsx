import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../design-token";
import { currentUser } from "../../Router";

const assignmentDetails = {
  1: {
    title: "과학 탐구 보고서",
    subject: "통합과학",
    dueDate: "2026년 9월 18일 23:59",
    description: "우리 주변에서 관찰할 수 있는 과학 현상을 하나 선택하여 탐구 과정과 결과를 보고서로 작성하세요.",
    criteria: ["탐구 주제의 적절성", "탐구 과정의 구체성", "결과 분석 및 결론"],
    submitted: false },

  2: {
    title: "독서 감상문",
    subject: "국어",
    dueDate: "2026년 9월 25일 23:59",
    description: "선정 도서를 읽고 핵심 내용과 자신의 생각을 정리해 제출하세요.",
    criteria: ["내용 이해", "자기 생각의 표현", "문장 구성"],
    submitted: true },
};

export const AssignmentDetail = () => {
  const { assignmentId } = useParams();
  const assignment =
    assignmentDetails[assignmentId] ?? assignmentDetails[1];
  const canManage = ["CLASS_ADMIN", "ADMIN"].includes(currentUser.role);

  return (
    <Page>
      <Content>
        <BackLink to="/exam">
          ← 수행평가 목록으로
        </BackLink>

        <Header>
          <div>
            <Badge>수행평가</Badge>
            <h1>{assignment.title}</h1>
            <p>{assignment.subject}</p>
          </div>

          <DueDate>
            <span>제출 마감</span>
            <strong>{assignment.dueDate}</strong>
          </DueDate>
        </Header>

        <Grid>
          <Article>
            <h2>수행평가 안내</h2>
            <p>{assignment.description}</p>

            <h2>평가 기준</h2>
            <ol>
              {assignment.criteria.map((criterion) => (
                <li key={criterion}>{criterion}</li>
              ))}
            </ol>
          </Article>

          <SideCard>
            <h2>제출 현황</h2>

            <SubmitState $submitted={assignment.submitted}>
              {assignment.submitted ? "제출 완료" : "제출 전"}
            </SubmitState>

            {assignment.submitted ? (
              <p>
                제출물을 수정하려면 담당 선생님께 문의하세요.
              </p>
            ) : (
              <SubmitButton type="button">
                제출하기
              </SubmitButton>
            )}

            {canManage && (
              <ManageButton type="button">
                제출 현황 관리
              </ManageButton>
            )}
          </SideCard>
        </Grid>
      </Content>
    </Page>
  );
};

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

const BackLink = styled(Link)`
  color: ${colors.green[500]};
  text-decoration: none;
  font-weight: 700;
`;

const Header = styled.header`
  margin: 30px 0;
  padding: 36px;
  display: flex;
  justify-content: space-between;
  border-radius: 18px;
  background: ${colors.white[500]};

  h1 {
    margin: 12px 0 8px;
    font-size: 32px;
  }

  p {
    margin: 0;
    color: ${colors.gray[400]};
  }
`;

const Badge = styled.span`
  padding: 7px 10px;
  border-radius: 6px;
  background: ${colors.green[300]};
  color: ${colors.green[500]};
  font-size: 13px;
  font-weight: 700;
`;

const DueDate = styled.div`
  display: grid;
  align-content: center;
  gap: 8px;
  text-align: right;

  span {
    color: ${colors.gray[400]};
    font-size: 13px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 290px;
  gap: 22px;
`;

const Article = styled.article`
  padding: 34px;
  border-radius: 18px;
  background: ${colors.white[500]};

  h2 {
    margin: 0 0 16px;
    font-size: 20px;
  }

  p {
    line-height: 1.75;
    margin: 0 0 34px;
  }

  ol {
    margin: 0;
    padding-left: 24px;
    line-height: 2;
  }
`;

const SideCard = styled.aside`
  height: fit-content;
  padding: 28px;
  border-radius: 18px;
  background: ${colors.white[500]};

  h2 {
    margin: 0 0 20px;
    font-size: 20px;
  }

  p {
    color: ${colors.gray[400]};
    font-size: 14px;
    line-height: 1.6;
  }
`;

const SubmitState = styled.strong`
  display: block;
  margin-bottom: 20px;
  color: ${({ $submitted }) =>
    $submitted ? colors.green[500] : colors.red[500]};
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  border: 0;
  border-radius: 8px;
  background: ${colors.green[500]};
  color: ${colors.white[500]};
  cursor: pointer;
  font: inherit;
  font-weight: 700;
`;

const ManageButton = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 11px;
  border: 1px solid ${colors.green[500]};
  border-radius: 8px;
  background: ${colors.white[500]};
  color: ${colors.green[500]};
  cursor: pointer;
  font: inherit;
`;