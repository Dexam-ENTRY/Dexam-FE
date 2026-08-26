import styled from "@emotion/styled";
import { colors } from "../design-token";
import dayjs from "dayjs";
export const Ddate = ({
  width = "500px",
  height = "150px",
  backgroundColor = colors.green[100],
  color = "#000000",
  title,
  date,
  borderColor = colors.ivory[500],
}) => {
  const startDate = date.split("~")[0].trim();
  const targetDate = dayjs(startDate);
  const today = dayjs();

  const dDay = targetDate.diff(today, "day");

  let result;

  if (dDay > 0) {
    result = `D-${dDay}`;
  } else if (dDay === 0) {
    result = "D-Day";
  } else {
    result = `D+${Math.abs(dDay)}`;
  }
  return (
    <>
      <DdateWrapper
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
          <DayWrapper>
            <Day>{date}</Day>
          </DayWrapper>
        </LeftText>
        <Dday>{result}</Dday>
      </DdateWrapper>
    </>
  );
};

const DdateWrapper = styled.div`
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

const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.green[500]};
`;

const Dday = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  padding: 20px 40px;
  margin-top: 40px;
`;

const DayWrapper = styled.div`
  display: flex;
`;
