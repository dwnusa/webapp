import React, { Fragment, useState, useCallback } from "react";
import {
  IonButton,
  IonItem,
  IonFab,
  IonIcon,
  IonRadioGroup,
  IonListHeader,
  IonLabel,
  IonRadio,
} from "@ionic/react";
import { close } from "ionicons/icons";
import "./Survey.css";
import surveyArray from "./survey.json";
import { post } from "services";
import good from "assets/good.png";
import styled from "styled-components";

interface SurveyProps {
  setShowModal: (trigger: boolean) => void;
  userId: number;
  setQactive: any;
}

const Survey: React.FC<SurveyProps> = ({
  setShowModal,
  userId,
  setQactive,
}) => {
  const [currentNum, setCurrentNum] = useState<number>(0);
  const [surveyResult, setSurveyResult] = useState<number[]>([]);
  const [currentResult] = useState<number>();

  const updateUser = useCallback(async () => {
    post(`/user/${userId}`, {
      ANSWER: surveyResult.toString(),
    });
  }, [userId, surveyResult]);

  return (
    <Fragment>
      <div className="survey-page-wrapper">
        <IonFab vertical="top" horizontal="end" slot="fixed">
          <IonIcon icon={close} onClick={() => setShowModal(false)} />
        </IonFab>
        <div className="survey-wrapper">
          <IonRadioGroup
            value={currentResult}
            onIonChange={(e) => {
              const result = surveyResult;
              const changedValue = e.detail.value;
              if (!isNaN(changedValue)) {
                result[currentNum] = e.detail.value;
                setSurveyResult(result);
              }
            }}
          >
            {currentNum < surveyArray.length && (
              <IonListHeader>
                <IonLabel>
                  {currentNum + 1}. {surveyArray[currentNum].title}
                </IonLabel>
              </IonListHeader>
            )}
            {currentNum < surveyArray.length &&
              surveyArray[currentNum].questions.map((question, i) => {
                return (
                  <IonItem key={i}>
                    <IonLabel className="survey-question">{question}</IonLabel>
                    <IonRadio slot="end" value={i} />
                  </IonItem>
                );
              })}
            {currentNum === surveyArray.length && (
              <SurveyResult>
                <div className="center">
                  <div>
                    <span>수면 효율</span>
                    <span className="result-percent">75%</span>
                  </div>
                  <img alt="good" src={good} />
                </div>
                <div className="info">
                  <div className="title">자마가 주는 꿀팁! 잊지마세요!</div>
                  <div className="sub">1. 잠이 안오면 침대에서 나오기!</div>
                  <p>30분 이상 누워서 자려고 애써도 잠이 안오면</p>
                  <p>미련없이잠자리에서 나오세요. </p>
                  <p>잠이 올때까지 다른 활동을 해보시는 겁니다.</p>
                </div>
              </SurveyResult>
            )}
          </IonRadioGroup>
        </div>
      </div>
      <IonButton
        expand="full"
        size="large"
        onClick={() => {
          if (currentNum === surveyArray.length) {
            setShowModal(false);
            setQactive(true);
          }
          if (isNaN(surveyResult[currentNum])) {
            return;
          }
          if (currentNum < surveyArray.length) {
            setCurrentNum(currentNum + 1);
          }
          updateUser();
        }}
      >
        {currentNum < surveyArray.length ? "다음" : "메인으로 가기"}
      </IonButton>
    </Fragment>
  );
};

const SurveyResult = styled.div`
  font-size: 20px;
  .center {
    text-align: center;
    img {
      margin-top: 32px;
    }
  }
  .info {
    padding: 20px;
    .title {
      margin-top: 33px;
      font-size: 21px;
      font-weight: bold;
    }
    .sub {
      margin-top: 30px;
      font-size: 18px;
      margin-bottom: 10px;
      font-weight: bold;
    }
    p {
      font-size: 16px;
      margin: 5px 0px 5px 19px;
    }
  }
  .result-percent {
    font-size: 40px;
  }
`;

export default Survey;
