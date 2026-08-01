import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "components";
import { CardBox } from "components/Cardbox";
import { colors } from "../design-token";

export const SelectPage = () => {
  const navigate = useNavigate();
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <Wrapper>
      <CardBox width="700px" height="auto">
        <Title>학생 정보 선택</Title>

        <Select>
          <option>학년 선택</option>
          <option>1학년</option>
          <option>2학년</option>
          <option>3학년</option>
        </Select>

        <Select>
          <option>반 선택</option>
          <option>1반</option>
          <option>2반</option>
          <option>3반</option>
          <option>4반</option>
        </Select>

        <Select>
          <option>번호 선택</option>
          {numbers.map((number) => (
            <option key={number}>{number}번</option>
          ))}
        </Select>

        <Button
          title="홈으로 가기"
          width="350px"
          onClick={() => navigate("/")}
        />
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
  font-size: 36px;
  color: ${colors.gray[500]};
`;

const Select = styled.select`
  width: 350px;
  height: 55px;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 0 15px;
  font-size: 18px;
`;
