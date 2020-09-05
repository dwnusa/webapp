import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";
import { IonIcon } from "@ionic/react";
import { pencilSharp } from "ionicons/icons";
import "./index.css";
import history from "reactHistory";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Record } from "../../../types";

interface RecordComponentProps {
  records: Record[];
  userId: number;
}

const RecordComponent: React.FC<RecordComponentProps> = ({
  records,
  userId,
}) => {
  const percentage1 = 60;
  const percentage2 = 70;
  const [isRecorded, setisRecorded] = useState(false);
  const [existRecord, setexistRecord] = useState(false);
  const [, setcontentCount] = useState<number>(0);
  useEffect(() => {
    if (records.length === 0) {
      setisRecorded(false);
      setexistRecord(false);
    } else {
      const today = moment().format("YYYY-MM-DD");
      setisRecorded(today === records[0].date);
      setexistRecord(true);
      setcontentCount(10);
    }
  }, [isRecorded, records]);

  return (
    <Container style={{ paddingBottom: "20px" }}>
      <div className="today">{moment().format("YYYY-MM-DD")}</div>
      {!isRecorded && (
        <div
          className="title"
          onClick={() => {
            history.push("./" + userId + "/recording");
          }}
        >
          수면 기록하기
          <IonIcon icon={pencilSharp} />
        </div>
      )}
      {isRecorded && (
        <div>
          <h3 className="circular-title">오늘의 수면 상태</h3>
          <div className="circular-container">
            <div className="circular">
              <CircularProgressbar
                value={percentage1}
                text={`${percentage1}%`}
              />
              <label>수면 만족도</label>
            </div>
            <div className="circular">
              <CircularProgressbar
                value={percentage2}
                text={`${percentage2}%`}
              />
              <label>수면 효율성</label>
            </div>
          </div>
        </div>
      )}
      {existRecord && (
        <div className="record">
          <div>
            <div className="latest-record">{records[0].date}</div>
            <div className="flex record-title-container">
              <div className="record-flex-row">
                <span className="record-title">최근 사용기록</span>
                <span className="record-title">
                  {records[0].contentsDuration}
                </span>
              </div>
            </div>
            <div className="flex">
              <span>호흡법 강의</span>
              <span>3:01</span>
            </div>
            <div className="flex">
              <span>해변 파도 소리</span>
              <span>2:00</span>
            </div>
            <div className="flex">
              <span> 편안한 마음 갖기</span>
              <span>29:49</span>
            </div>
            <div className="record-replay">
              <span
                onClick={() => {
                  history.push("/tab2/" + userId + "/player");
                }}
              >
                다시듣기
              </span>
            </div>
          </div>
        </div>
      )}
      {!existRecord && (
        <div className="record">
          <div className="no-record-text">
            <span>수면기록이 없어요</span>
            <span>오늘 밤, 닥터자마를 만나보세요</span>
          </div>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  .CircularProgressbar-path {
    stroke: #4370ff;
  }
  background-color: #34373c;
  height: fit-content;
  font-size: 18px;
  .today {
    margin: 11px;
    padding: 21px 11px;
  }
  .title {
    text-align: center;
    margin: 15px 0 43px;
  }
  .circular-title {
    margin-left: 20px;
  }
  .circular-container {
    display: flex;
    justify-content: center;
    gap: 60px;
    .circular {
      display: flex;
      flex-direction: column;
      text-align: center;
      label {
        margin-top: 10px;
      }
    }
    svg {
      width: 100px;
      height: 100px;
    }
  }
  .record {
    border-top: 1px solid #292d30;
    margin: 22px;
    .flex {
      display: flex;
      justify-content: space-between;
      padding: 4px 0;
    }
    .record-title-container {
      padding: 22px 0;
      flex-direction: column;
    }

    .record-title {
      font-size: 20px;
    }
  }
`;

export default RecordComponent;
