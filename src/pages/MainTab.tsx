import React from "react";
import {
  IonContent,
  IonPage,
} from "@ionic/react";
import MainContainer from "../components/containers/MainContainer";

const MainTab: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <MainContainer name="김홍도" />
      </IonContent>
    </IonPage>
  );
};

export default MainTab;
