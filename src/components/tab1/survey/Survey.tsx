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
  IonAlert,
} from "@ionic/react";
import { close } from "ionicons/icons";
import "./Survey.css";
import surveyArray from "./survey.json";
import { post } from "services";

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
  const [showAlert, setShowAlert] = useState<boolean>(false);

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
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => {
            setShowModal(false);
            setShowAlert(false);
            setQactive(true);
          }}
          message={"제출 되었습니다."}
          buttons={["OK"]}
        />
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
            <IonListHeader>
              <IonLabel>
                {currentNum + 1}. {surveyArray[currentNum].title}
              </IonLabel>
            </IonListHeader>
            {surveyArray[currentNum].questions.map((question, i) => {
              return (
                <IonItem key={i}>
                  <IonLabel className="survey-question">{question}</IonLabel>
                  <IonRadio slot="end" value={i} />
                </IonItem>
              );
            })}
          </IonRadioGroup>
        </div>
      </div>
      <IonButton
        expand="full"
        size="large"
        onClick={() => {
          if (isNaN(surveyResult[currentNum])) {
            return;
          }
          if (currentNum < surveyArray.length - 1) {
            setCurrentNum(currentNum + 1);
          } else {
            setShowAlert(true);
          }
          updateUser();
        }}
      >
        {currentNum < surveyArray.length - 1 ? "다음" : "제출"}
      </IonButton>
    </Fragment>
  );
};

export default Survey;
