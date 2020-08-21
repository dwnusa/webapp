import React, { Fragment, useState } from "react";
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

interface SurveyProps {
  setShowModal: (trigger: boolean) => void;
}

const Survey: React.FC<SurveyProps> = ({ setShowModal }) => {
  const [selected, setSelected] = useState<number>(1);

  return (
    <Fragment>
      <IonFab vertical="top" horizontal="end" slot="fixed">
        <IonIcon icon={close} onClick={() => setShowModal(false)} />
      </IonFab>

      <IonRadioGroup
        className="survey-group"
        value={selected}
        onIonChange={(e) => setSelected(e.detail.value)}
      >
        <IonListHeader>
          <IonLabel>얼마나 오랫동안 수면 장애가 있었나요?</IonLabel>
        </IonListHeader>

        <IonItem>
          <IonLabel>문제 없음</IonLabel>
          <IonRadio slot="end" value={1} />
        </IonItem>

        <IonItem>
          <IonLabel>1주 이내</IonLabel>
          <IonRadio slot="end" value={2} />
        </IonItem>

        <IonItem>
          <IonLabel>1달 이내</IonLabel>
          <IonRadio slot="end" value={3} />
        </IonItem>

        <IonItem>
          <IonLabel>3개월 이내</IonLabel>
          <IonRadio slot="end" value={4} />
        </IonItem>

        <IonItem>
          <IonLabel>1년 이내</IonLabel>
          <IonRadio slot="end" value={5} />
        </IonItem>

        <IonItem>
          <IonLabel>1년 이상</IonLabel>
          <IonRadio slot="end" value={6} />
        </IonItem>
      </IonRadioGroup>
      <IonButton expand="full" size="large">
        다음
      </IonButton>
    </Fragment>
  );
};

export default Survey;
