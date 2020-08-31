import React, { useState, useEffect } from "react";
import { IonContent, IonPage, IonModal } from "@ionic/react";
import MainContainer from "components/containers/MainContainer";
import SlideContainer from "components/containers/SlideContainer";
import GridContainer from "components/containers/GridContainer";
import SurveyAlert from "components/alerts/SurveyAlert";
import Survey from "components/survey/Survey";
import { useParams } from "react-router-dom";
import { get } from "services";
import { httpStatus } from "types";

const MainTab: React.FC = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("익명");
  const { userId } = useParams();

  useEffect(() => {
    const id: number = userId || 1;
    get(`/user/${id}`).then((res) => {
      if (res.status === httpStatus.OK) {
        setUsername(res.result[0].USERNAME);
      }
    });
  });

  return (
    <IonPage>
      <IonContent>
        <IonModal isOpen={showModal} cssClass="my-custom-class">
          <Survey setShowModal={setShowModal}></Survey>
        </IonModal>
        <SurveyAlert setShowModal={setShowModal}></SurveyAlert>
        <MainContainer name={username} />
        <SlideContainer title="오늘의 추천 수면"></SlideContainer>
        <GridContainer title="수면 카테고리"></GridContainer>
      </IonContent>
    </IonPage>
  );
};

export default MainTab;
