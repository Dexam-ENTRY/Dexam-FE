import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../design-token";
import { Header } from "../../components";

// API 연동 전 임시 사용자 데이터입니다.
const currentUser = { name: "김", role: "USER" };

const assessments = [
  {
    id: 1,
    type: "ASSIGNMENT",
    title: "과학 탐구 보고서",
    subject: "통합과학",
    dueDate: "2026.09.18",
    status: "제출 전"
  },

  {
    id: 2,
    type: "ASSIGNMENT",
    title: "독서 감상문",
    subject: "국어",
    dueDate: "2026.09.25",
    status: "제출 완료"
  },

  {
    id: 3,
    type: "EXAM",
    title: "2학기 중간고사",
    subject: "수학",
    dueDate: "2026.10.14",
    status: "예정"
  },

  {
    id: 4,
    type: "EXAM",
    title: "영어 단원 평가",
    subject: "영어",
    dueDate: "2026.09.11",
    status: "응시 완료"
  },
];

export const ExamMain = () => {
  const [type, setType] = useState("ALL");
  const [keyword, setKeyword] = useState("");

  const isManager = ["CLASS_ADMIN", "ADMIN"].includes(currentUser.role);

  const filteredAssessments = useMemo(
    () =>
      assessments.filter(
        (assessment) =>
          (type === "ALL" || assessment.type === type) &&
          assessment.title.includes(keyword)
      ),
    [keyword, type]
  );

  return (
    <Page>
      <Header/>

      <Content>
        <Heading>
          <div>
            <Eyebrow>학습 평가</Eyebrow>

            <h1>시험 / 수행평가</h1>

            <p>
              시험 일정과 수행평가 제출 현황을 확인하세요.
            </p>
          </div>

          {isManager && (
            <ManageNotice>
              담당 반 수행평가를 관리할 수 있습니다.
            </ManageNotice>
          )}
        </Heading>

        <Tabs aria-label="평가 유형">
          {[
            ["ALL", "전체"],
            ["EXAM", "시험"],
            ["ASSIGNMENT", "수행평가"],
          ].map(([value, label]) => (
            <Tab
              key={value}
              type="button"
              $active={type === value}
              onClick={() => setType(value)}
            >
              {label}
            </Tab>
          ))}
        </Tabs>

        <FilterArea>
          <SearchLabel htmlFor="assessment-search">
            평가명 검색
          </SearchLabel>

          <SearchInput
            id="assessment-search"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="평가명을 입력하세요"
          />
        </FilterArea>

        <SectionTitle>
          <h2>
            {type === "EXAM"
              ? "시험 목록"
              : type === "ASSIGNMENT"
                ? "수행평가 목록"
                : "전체 평가 목록"}
          </h2>

          <span>{filteredAssessments.length}건</span>
        </SectionTitle>

        <List>
          {filteredAssessments.map((assessment) => {
            const detailPath =
              assessment.type === "ASSIGNMENT"
                ? `/assignment/${assessment.id}`
                : `/exam/${assessment.id}`;

            return (
              <AssessmentItem key={assessment.id}>
                <TypeBadge $type={assessment.type}>
                  {assessment.type === "ASSIGNMENT"
                    ? "수행평가"
                    : "시험"}
                </TypeBadge>

                <AssessmentInfo>
                  <strong>{assessment.title}</strong>
                  <span>{assessment.subject}</span>
                </AssessmentInfo>

                <DateInfo>
                  <span>마감 / 시험일</span>
                  <strong>{assessment.dueDate}</strong>
                </DateInfo>

                <Status
                  $complete={assessment.status.includes("완료")}
                >
                  {assessment.status}
                </Status>

                <DetailLink to={detailPath}>
                  상세 보기
                </DetailLink>
              </AssessmentItem>
            );
          })}
        </List>
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
  width: 1120px;
  margin: 0 auto;
  padding: 70px 0;
`;

const Heading = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  h1 {
    margin: 4px 0 10px;

    color: ${colors.gray[500]};
    font-size: 36px;
    font-weight: 800;
    letter-spacing: -1px;
  }

  p {
    margin: 0;

    color: ${colors.gray[400]};
    font-size: 15px;
  }
`;

const Eyebrow = styled.span`
  color: ${colors.green[500]};
  font-size: 14px;
  font-weight: 700;
`;

const ManageNotice = styled.span`
  padding: 12px 16px;

  border: 1px solid ${colors.green[300]};
  border-radius: 12px;

  background: ${colors.green[300]};
  color: ${colors.green[500]};

  font-size: 14px;
  font-weight: 600;
`;

/* -------------------- Tabs -------------------- */

const Tabs = styled.div`
  display: flex;
  gap: 8px;

  margin: 44px 0 22px;
`;

const Tab = styled.button`
  padding: 10px 20px;

  border: 1px solid
    ${({ $active }) =>
    $active ? colors.green[500] : colors.green[300]};
  border-radius: 20px;

  background: ${({ $active }) =>
    $active ? colors.green[500] : colors.white[500]};

  color: ${({ $active }) =>
    $active ? colors.white[500] : colors.gray[400]};

  font-size: 15px;
  font-weight: 600;

  cursor: pointer;

  transition: all 0.15s ease;

  &:hover {
    border-color: ${colors.green[500]};
    color: ${({ $active }) =>
    $active ? colors.white[500] : colors.green[500]};
  }
`;

/* -------------------- Search -------------------- */

const FilterArea = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 20px 24px;

  border: 1px solid ${colors.green[300]};
  border-radius: 16px;

  background: ${colors.white[500]};
`;

const SearchLabel = styled.label`
  color: ${colors.gray[500]};
  font-size: 14px;
  font-weight: 700;
`;

const SearchInput = styled.input`
  width: 300px;
  height: 42px;
  padding: 0 14px;

  box-sizing: border-box;

  border: 1px solid ${colors.green[300]};
  border-radius: 8px;

  background: ${colors.white[500]};
  color: ${colors.gray[500]};

  font: inherit;
  font-size: 14px;

  outline: none;

  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &::placeholder {
    color: ${colors.gray[400]};
  }

  &:focus {
    border-color: ${colors.green[500]};
    box-shadow: 0 0 0 3px ${colors.green[300]};
  }
`;

/* -------------------- Section -------------------- */

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 38px 0 14px;

  h2 {
    margin: 0;

    color: ${colors.gray[500]};
    font-size: 22px;
    font-weight: 800;
  }

  span {
    color: ${colors.gray[400]};
    font-size: 14px;
  }
`;

/* -------------------- List -------------------- */

const List = styled.ul`
  margin: 0;
  padding: 0;

  overflow: hidden;

  border: 1px solid ${colors.green[300]};
  border-radius: 16px;

  background: ${colors.white[500]};

  list-style: none;
`;

const AssessmentItem = styled.li`
  display: grid;
  grid-template-columns: 96px 1fr 150px 100px 94px;
  align-items: center;
  gap: 20px;

  min-height: 78px;
  padding: 20px 24px;

  border-bottom: 1px solid ${colors.green[300]};

  transition: background 0.15s ease;

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    background: ${colors.ivory[500]};
  }
`;

const TypeBadge = styled.span`
  width: fit-content;

  padding: 7px 10px;

  border-radius: 6px;

  background: ${({ $type }) =>
    $type === "ASSIGNMENT"
      ? colors.green[300]
      : colors.red[300]};

  color: ${({ $type }) =>
    $type === "ASSIGNMENT"
      ? colors.green[500]
      : colors.red[500]};

  font-size: 13px;
  font-weight: 700;
`;

const AssessmentInfo = styled.div`
  display: grid;
  gap: 6px;

  strong {
    color: ${colors.gray[500]};
    font-size: 17px;
    font-weight: 700;
  }

  span {
    color: ${colors.gray[400]};
    font-size: 14px;
  }
`;

const DateInfo = styled.div`
  display: grid;
  gap: 6px;

  span {
    color: ${colors.gray[400]};
    font-size: 12px;
  }

  strong {
    color: ${colors.gray[500]};
    font-size: 14px;
  }
`;

const Status = styled.span`
  color: ${({ $complete }) =>
    $complete ? colors.green[500] : colors.gray[400]};

  font-size: 14px;
  font-weight: 600;
`;

const DetailLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 36px;
  padding: 0 12px;

  border-radius: 8px;

  background: ${colors.green[500]};
  color: ${colors.white[500]};

  font-size: 13px;
  font-weight: 600;
  text-decoration: none;

  transition: all 0.15s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }
`;
