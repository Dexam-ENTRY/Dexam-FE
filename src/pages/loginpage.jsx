import styled from "styled-components";
import { colors } from "../design-token";
import { Button } from "components";
import { CardBox } from "components/Cardbox";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <CardBox width="700px" height="700px">
        <Title>로그인하기</Title>

        <Gap>
          <Button
            title="구글로 로그인하기"
            width="350px"
            onClick={() => navigate("/select")}
          />
        </Gap>
      </CardBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${colors.ivory[500]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: ${colors.gray[500]};
`;

const Gap = styled.div`
  margin-top: 100px;
`;
