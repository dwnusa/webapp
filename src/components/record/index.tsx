import React from "react";
import styled from "styled-components";
import moment from "moment";
import { IonIcon } from "@ionic/react";
import { pencilSharp } from "ionicons/icons";

const RecordComponent: React.FC = () => {
  return (
    <Container>
      <div className="today">{moment().format("YYYY.MM.DD")}</div>
      <div className="title">
        수면 기록하기
        <IonIcon icon={pencilSharp} />
      </div>
      <div className="record">
        <div>
          <div className="flex record-title-container">
            <span className="record-title">컨텐츠 사용기록</span>
            <span>00:00</span>
          </div>
          <div className="flex">
            <span>이름</span>
            <span>00:00</span>
          </div>
          <div className="flex">
            <span>이름</span>
            <span>00:00</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #34373c;
  height: 42vh;
  font-size: 18px;
  .today {
    margin: 11px;
    padding: 21px 11px;
  }
  .title {
    text-align: center;
    margin: 15px 0 43px;
  }
  .record {
    border-top: 1px solid #292d30;
    margin: 22px;
    padding: 10px;
    .flex {
      display: flex;
      justify-content: space-between;
      padding: 4px 0;
    }
    .record-title-container {
      padding: 22px 0;
    }

    .record-title {
      font-size: 20px;
    }
  }
`;

export default RecordComponent;
