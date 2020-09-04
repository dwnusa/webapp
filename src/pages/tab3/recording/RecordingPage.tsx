import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonButton,
  IonRange,
  IonLabel,
  IonFab,
  IonIcon,
} from "@ionic/react";
import "./RecordingPage.css";
import IconBtn from "components/tab3/iconBtn";
import icons from "assets";
import styled from "styled-components";
import _ from "lodash";
import { close } from "ionicons/icons";
import history from "reactHistory";
import TimePicker from "react-times";
import "react-times/css/material/default.css";
import moment from "moment";

const RecordingPage: React.FC = () => {
  const [value, setValue] = useState(50);
  const [activeIconArr, setActiveIconArr] = useState(
    _.range(6).map((e) => false)
  );
  const [activatedTimePicker, setActivatedTimePicker] = useState<number | null>(
    null
  );
  const [timeArr, setTimeArr] = useState(
    _.range(4).map((e) => moment().format("HH:MM"))
  );

  const timeInputTextArr = [
    "침대에 들어간 시간",
    "잠 든 시간",
    "잠 깬 시간",
    "침대에서 일어난 시간",
  ];

  return (
    <IonPage>
      <IonFab vertical="top" horizontal="end" slot="fixed">
        <IonIcon
          icon={close}
          onClick={() => {
            history.push("/tab3");
          }}
        />
      </IonFab>
      <TimeInputContainer>
        {timeInputTextArr.map((text, i) => {
          return (
            <TimePicker
              key={i}
              focused={activatedTimePicker === i}
              colorPalette="dark"
              time={timeArr[i]}
              onTimeChange={(e: any) => {
                const newArr = [...timeArr];
                newArr[i] = `${e.hour}:${e.minute}`;
                setTimeArr(newArr);
              }}
              trigger={
                <div
                  className="picker-trigger"
                  onClick={() => {
                    if (activatedTimePicker === i) {
                      setActivatedTimePicker(null);
                    } else {
                      setActivatedTimePicker(i);
                    }
                  }}
                >
                  <span>{text}</span>
                  <span>{timeArr[i]}</span>
                </div>
              }
            ></TimePicker>
          );
        })}
      </TimeInputContainer>
      <IonContent>
        <div className="recording-sleep-score">
          <IonLabel>수면 만족도</IonLabel>
          <div className="recording-sleep-score-bar">
            <IonRange
              pin={true}
              value={value}
              onIonChange={(e) => setValue(e.detail.value as number)}
            />
            <p>{value}%</p>
          </div>
        </div>
        <IconContainer>
          {icons.map((icon, i) => {
            return (
              <IconBtn
                active={activeIconArr[i]}
                key={icon.text}
                icon={icon}
                onClick={() => {
                  const newArr = [...activeIconArr];
                  newArr[i] = !newArr[i];
                  setActiveIconArr(newArr);
                }}
              ></IconBtn>
            );
          })}
        </IconContainer>
      </IonContent>

      <IonButton expand="block" onClick={() => {}}>
        저장하기
      </IonButton>
    </IonPage>
  );
};

const IconContainer = styled.div`
  display: grid;
  gap: 10px;
  margin: 0 30px 0 30px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const TimeInputContainer = styled.div`
  margin-top: 5vh;
  padding: 20px;
  font-size: 20px;
  .picker-trigger {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
`;

export default RecordingPage;