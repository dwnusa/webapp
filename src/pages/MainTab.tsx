import React from "react";
import {
  IonContent,
  IonPage,
} from "@ionic/react";
import MainContainer from "../components/containers/MainContainer";
import SlideContainer from "../components/containers/SlideContainer";
import GridContainer from "../components/containers/GridContainer";

const MainTab: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <MainContainer name="김홍도" />
        <SlideContainer title="오늘의 추천 수면"></SlideContainer>
        <GridContainer title="수면 카테고리"></GridContainer>
      </IonContent>
    </IonPage>
  );
};

export default MainTab;
