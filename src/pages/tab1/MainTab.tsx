import React, { useState } from "react";
import { IonContent, IonPage, IonModal } from "@ionic/react";
import MainContainer from "components/containers/MainContainer";
import SlideContainer from "components/containers/SlideContainer";
import GridContainer from "components/containers/GridContainer";
import SurveyAlert from "components/alerts/SurveyAlert";
import Survey from "components/survey/Survey";

const MainTab: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <IonContent>
        <IonModal isOpen={showModal} cssClass="my-custom-class">
          <Survey setShowModal={setShowModal}></Survey>
        </IonModal>
        <SurveyAlert setShowModal={setShowModal}></SurveyAlert>
        <MainContainer name="김홍도" />
        <SlideContainer title="오늘의 추천 수면"></SlideContainer>
        <GridContainer title="수면 카테고리"></GridContainer>
      </IonContent>
    </IonPage>
  );
};

export default MainTab;
