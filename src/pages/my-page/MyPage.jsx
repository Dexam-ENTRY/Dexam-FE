import styled from "styled-components";
import { Header } from "../../components";

const MyPage = () => {
  return (
    <>
      <Header />

      <Main>
        <Content>
          <LeftSection>
            <ProfileCard>
              <ProfileImage />

              <ProfileInfo>
                <Name>홍길동</Name>
                <ClassInfo>1학년 1반 17번</ClassInfo>
              </ProfileInfo>

              <SettingButton>⚙</SettingButton>
            </ProfileCard>

            <MenuList>
              <MenuButton>시험일정 확인하러가기 &gt;</MenuButton>
              <MenuButton>공지사항 확인하러가기 &gt;</MenuButton>
              <MenuButton>
                시험 및 수행평가 확인하러가기 &gt;
              </MenuButton>
            </MenuList>
          </LeftSection>

          <TimetableCard>
            <TimetableTitle>시간표 확인하기</TimetableTitle>

            <TimetableList>
              <TimetableRow>
                <Period>1교시</Period>
                <Subject>수학</Subject>
              </TimetableRow>

              <TimetableRow>
                <Period>2교시</Period>
                <Subject>과학</Subject>
              </TimetableRow>

              <TimetableRow>
                <Period>3교시</Period>
                <Subject>과학</Subject>
              </TimetableRow>

              <TimetableRow>
                <Period>4교시</Period>
                <Subject>과학</Subject>
              </TimetableRow>

              <TimetableRow>
                <Period>5교시</Period>
                <Subject>과학</Subject>
              </TimetableRow>

              <TimetableRow>
                <Period>6교시</Period>
                <Subject>과학</Subject>
              </TimetableRow>

              <TimetableRow>
                <Period>7교시</Period>
                <Subject>과학</Subject>
              </TimetableRow>
            </TimetableList>
          </TimetableCard>
        </Content>
      </Main>
    </>
  );
};

const Main = styled.main`
  min-height: calc(100vh - 80px);
  background-color: #fffcf4;
  padding: 80px 44px;
  font-family: "Omyu Pretty", sans-serif;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1230px;
  margin: 0 auto;
`;

const LeftSection = styled.div`
  width: 520px;
`;

const ProfileCard = styled.div`
  width: 100%;
  height: 160px;
  background-color: white;
  border-radius: 12px;

  display: flex;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
`;

const ProfileImage = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-color: #009b4d;
  flex-shrink: 0;
`;

const ProfileInfo = styled.div`
  margin-left: 48px;
`;

const Name = styled.h2`
  margin: 0 0 12px;
  font-size: 24px;
  font-weight: 500;
`;

const ClassInfo = styled.p`
  margin: 0;
  font-size: 16px;
`;

const SettingButton = styled.button`
  margin-left: auto;
  border: none;
  background: none;
  font-family: inherit;
  font-size: 28px;
  cursor: pointer;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 54px;
`;

const MenuButton = styled.button`
  width: 100%;
  height: 72px;

  border: none;
  border-radius: 12px;
  background-color: white;

  text-align: left;
  padding: 0 50px;

  font-family: inherit;
  font-size: 20px;
  cursor: pointer;
`;

const TimetableCard = styled.div`
  width: 507px;
  height: 476px;
  background-color: white;
  border-radius: 12px;
  padding: 28px;
  box-sizing: border-box;
`;

const TimetableTitle = styled.h2`
  margin: 0 0 18px;
  font-size: 22px;
  font-weight: 500;
`;

const TimetableList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TimetableRow = styled.div`
  display: flex;
  font-size: 20px;
`;

const Period = styled.span`
  width: 150px;
`;

const Subject = styled.span``;

export default MyPage;
