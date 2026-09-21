import styled from "styled-components";

const scheduleData = [
  {
    subject: "국어",
    date: "7/29(수)",
    period: "1교시",
  },
  {
    subject: "수학",
    date: "7/30(목)",
    period: "2교시",
  },
  {
    subject: "과학",
    date: "7/30(목)",
    period: "3교시",
  },
  {
    subject: "영어",
    date: "7/30(목)",
    period: "3교시",
  },
];

function Schedule() {
  return (
    <ScheduleContainer>
      {scheduleData.map((item, index) => (
        <ScheduleRow key={index}>
          <Subject>{item.subject}</Subject>

          <ScheduleInfo>
            {item.date} · {item.period}
          </ScheduleInfo>
        </ScheduleRow>
      ))}
    </ScheduleContainer>
  );
}

export default Schedule;

const ScheduleContainer = styled.div`
  border: 1px solid #d5ddd8;
  border-radius: 20px;
  padding: 0 80px;
  background-color: #ffffff;
`;

const ScheduleRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 80px;
  width: 100%;

  & + & {
    border-top: 1px solid #e5e9e6;
  }
`;

const Subject = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const ScheduleInfo = styled.div`
  color: #52645a;
  font-size: 16px;
`;