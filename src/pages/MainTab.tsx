import React from "react";
import {
  IonContent,
  IonPage,
  IonAlert,
} from "@ionic/react";
import MainContainer from "../components/containers/MainContainer";
import SlideContainer from "../components/containers/SlideContainer";
import GridContainer from "../components/containers/GridContainer";

const MainTab: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonAlert
          isOpen={true}
          cssClass='my-custom-class'
          header={'Info'}
          message={'나에게 맞는 수면정보를 위해 몇 가지 정보를 알려주세요! (예상 소요시간 3분)'}
          buttons={['괜찮아요', '네, 좋아요']}
        />
        <MainContainer name="김홍도" />
        <SlideContainer title="오늘의 추천 수면"></SlideContainer>
        <GridContainer title="수면 카테고리"></GridContainer>
      </IonContent>
    </IonPage>
  );
};

export default MainTab;
