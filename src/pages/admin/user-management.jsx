import { useState } from "react";
import styled from "styled-components";
import { Button } from "../../components";
import { colors } from "../../design-token";
import { Header } from "../../components";

const userPages = [
  [
    ["홍길동", "1101", "1학년 1반", "hong@example.com", "USER"],
    ["김철수", "1203", "1학년 2반", "kim@example.com", "USER"],
    ["이영희", "2105", "2학년 1반", "lee@example.com", "CLASS_ADMIN"],
    ["박민수", "3112", "3학년 1반", "park@example.com", "ADMIN"],
    ["최지우", "1308", "1학년 3반", "choi@example.com", "USER"],
  ],
  [
    ["정다은", "1114", "1학년 1반", "jeong@example.com", "USER"],
    ["한유진", "1220", "1학년 2반", "han@example.com", "USER"],
    ["오세훈", "1311", "1학년 3반", "oh@example.com", "CLASS_ADMIN"],
    ["서하늘", "2108", "2학년 1반", "seo@example.com", "USER"],
    ["윤서준", "2215", "2학년 2반", "yoon@example.com", "USER"],
  ],
  [
    ["강민지", "1109", "1학년 1반", "kang@example.com", "USER"],
    ["문지호", "1217", "1학년 2반", "moon@example.com", "USER"],
    ["배수아", "1302", "1학년 3반", "bae@example.com", "CLASS_ADMIN"],
    ["임도현", "2110", "2학년 1반", "lim@example.com", "USER"],
    ["신예은", "2222", "2학년 2반", "shin@example.com", "USER"],
  ],
  [
    ["권민재", "1121", "1학년 1반", "kwon@example.com", "USER"],
    ["장서연", "1206", "1학년 2반", "jang@example.com", "CLASS_ADMIN"],
    ["노현우", "1319", "1학년 3반", "noh@example.com", "USER"],
    ["류지민", "2102", "2학년 1반", "ryu@example.com", "USER"],
    ["조은재", "2211", "2학년 2반", "cho@example.com", "ADMIN"],
  ],
  [
    ["김하진", "1130", "1학년 1반", "hajin@example.com", "USER"],
    ["안지민", "1210", "1학년 2반", "ahn@example.com", "USER"],
    ["차유나", "1324", "1학년 3반", "cha@example.com", "CLASS_ADMIN"],
    ["유건우", "2118", "2학년 1반", "yoo@example.com", "USER"],
    ["송아린", "2227", "2학년 2반", "song@example.com", "USER"],
  ],
];

const UserManagement1 = () => {
  const [page, setPage] = useState(0);

  return (
    <Page>
      <Header />

      <Main>
        <Heading>
          <div>
            <h1>사용자 관리</h1>
            <p>등록된 사용자를 조회하고 권한을 관리합니다.</p>
          </div>

          <Button
            title="+ 사용자 추가"
            width="150px"
          />
        </Heading>

        <SearchArea>
          <SearchInput
            placeholder="🔍  이름 / 학번 / 이메일 검색"
            aria-label="사용자 검색"
          />

          <RoleSelect
            defaultValue=""
            aria-label="권한 선택"
          >
            <option value="">권한</option>
            <option>USER</option>
            <option>CLASS_ADMIN</option>
            <option>ADMIN</option>
          </RoleSelect>

          <SearchButton type="button">
            검색
          </SearchButton>
        </SearchArea>

        <ListTitle>
          <h2>사용자 목록</h2>
          <span>총 128명</span>
        </ListTitle>

        <TableBox>
          <Table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    aria-label="전체 선택"
                  />
                </th>
                <th>이름</th>
                <th>학번</th>
                <th>학년/반</th>
                <th>이메일</th>
                <th>권한</th>
                <th>관리</th>
              </tr>
            </thead>

            <tbody>
              {userPages[page].map(
                ([
                  name,
                  studentId,
                  className,
                  email,
                  role,
                ]) => (
                  <tr key={studentId}>
                    <td>
                      <input
                        type="checkbox"
                        aria-label={`${name} 선택`}
                      />
                    </td>

                    <td>{name}</td>
                    <td>{studentId}</td>
                    <td>{className}</td>
                    <td>{email}</td>

                    <td>
                      <Role $role={role}>
                        {role}
                      </Role>
                    </td>

                    <td>
                      <DetailButton type="button">
                        상세
                      </DetailButton>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </TableBox>

        <Pagination aria-label="사용자 목록 페이지">
          <PageButton
            type="button"
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
          >
            ‹
          </PageButton>

          {userPages.map((_, index) => (
            <PageButton
              key={index}
              type="button"
              $active={page === index}
              aria-current={
                page === index ? "page" : undefined
              }
              onClick={() => setPage(index)}
            >
              {index + 1}
            </PageButton>
          ))}

          <PageButton
            type="button"
            disabled={page === userPages.length - 1}
            onClick={() => setPage(page + 1)}
          >
            ›
          </PageButton>
        </Pagination>
      </Main>
    </Page>
  );
};

const Page = styled.div`
  min-width: 1180px;
  min-height: 100vh;
  background: ${colors.ivory[500]};
  color: ${colors.gray[500]};
`;

const Main = styled.main`
  width: 1120px;
  margin: 0 auto;
  padding: 72px 0 80px;
`;

const Heading = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    margin: 0 0 12px;
    font-size: 32px;
  }

  p {
    margin: 0;
    color: ${colors.gray[400]};
    font-size: 17px;
  }
`;

const SearchArea = styled.section`
  display: flex;
  gap: 14px;

  margin-top: 46px;
  padding: 18px 22px;

  border: 1px solid ${colors.green[400]};
  border-radius: 12px;

  background: ${colors.white[500]};
`;

const SearchInput = styled.input`
  flex: 1;

  height: 44px;
  padding: 0 14px;

  border: 1px solid ${colors.green[400]};
  border-radius: 8px;

  font-family: inherit;
  font-size: 16px;
`;

const RoleSelect = styled.select`
  width: 150px;
  padding: 0 14px;

  border: 1px solid ${colors.green[400]};
  border-radius: 8px;

  background: ${colors.white[500]};

  font-family: inherit;
  font-size: 16px;
`;

const SearchButton = styled.button`
  width: 90px;

  border-radius: 8px;

  background: ${colors.green[500]};
  color: ${colors.white[500]};

  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
`;

const ListTitle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 44px 0 18px;

  h2 {
    margin: 0;
    font-size: 24px;
  }

  span {
    color: ${colors.gray[400]};
    font-size: 16px;
  }
`;

const TableBox = styled.div`
  overflow: hidden;

  border: 1px solid ${colors.green[400]};
  border-radius: 12px;

  background: ${colors.white[500]};
`;

const Table = styled.table`
  width: 100%;

  border-collapse: collapse;
  table-layout: fixed;

  font-size: 16px;

  th,
  td {
    height: 62px;
    padding: 0 14px;

    border-bottom: 1px solid ${colors.green[400]};

    text-align: center;
  }

  th {
    background: ${colors.green[200]};
    font-weight: 700;
  }

  tr:last-child td {
    border-bottom: none;
  }

  th:nth-child(1),
  td:nth-child(1) {
    width: 5%;
  }

  th:nth-child(2),
  td:nth-child(2) {
    width: 11%;
  }

  th:nth-child(3),
  td:nth-child(3) {
    width: 11%;
  }

  th:nth-child(4),
  td:nth-child(4) {
    width: 14%;
  }

  th:nth-child(5),
  td:nth-child(5) {
    width: 24%;
  }

  th:nth-child(6),
  td:nth-child(6) {
    width: 20%;
  }

  th:nth-child(7),
  td:nth-child(7) {
    width: 15%;
  }

  input {
    width: 16px;
    height: 16px;
    accent-color: ${colors.green[500]};
  }
`;

const Role = styled.span`
  display: inline-block;

  min-width: 88px;
  padding: 6px 10px;

  border-radius: 999px;

  background: ${({ $role }) =>
    $role === "ADMIN"
      ? colors.red[300]
      : colors.green[300]};

  color: ${({ $role }) =>
    $role === "ADMIN"
      ? colors.red[500]
      : colors.green[500]};

  font-size: 13px;
  font-weight: 700;
`;

const DetailButton = styled.button`
  color: ${colors.green[500]};

  font-family: inherit;
  font-size: 15px;
  font-weight: 700;
`;

const Pagination = styled.nav`
  display: flex;
  justify-content: center;
  gap: 8px;

  margin-top: 32px;
`;

const PageButton = styled.button`
  width: 34px;
  height: 34px;

  border-radius: 8px;

  background: ${({ $active }) =>
    $active ? colors.green[500] : "transparent"};

  color: ${({ $active }) =>
    $active ? colors.white[500] : colors.gray[400]};

  font-family: inherit;
  font-size: 17px;

  &:disabled {
    cursor: default;
    opacity: 0.35;
  }
`;

export default UserManagement1;