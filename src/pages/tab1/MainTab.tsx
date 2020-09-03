import React, { useState, useEffect } from "react";
import { IonContent, IonPage, IonModal } from "@ionic/react";
import MainContainer from "components/containers/MainContainer";
import SlideContainer from "components/containers/SlideContainer";
import GridContainer from "components/containers/GridContainer";
import SurveyAlert from "components/tab1/alerts/SurveyAlert";
import Survey from "components/tab1/survey/Survey";
import { useParams } from "react-router-dom";
import { get } from "services";
import { httpStatus } from "types";

const MainTab: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("익명");
  const [qactive, setQactive] = useState(false);
  const { userId } = useParams();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const id: number = userId || 1;
    get(`/user/${id}`).then((res) => {
      if (res.status === httpStatus.OK) {
        setUsername(res.result[0].USERNAME);
        setQactive(res.result[0].QACTIVE);
        setloading(false);
      }
    });
  }, [userId]);

  return (
    <IonPage>
      <IonContent>
        <IonModal isOpen={showModal} cssClass="my-custom-class">
          <Survey setShowModal={setShowModal} userId={userId}></Survey>
        </IonModal>
        {!qactive && !loading && (
          <SurveyAlert setShowModal={setShowModal}></SurveyAlert>
        )}
        <MainContainer name={username} />
        <SlideContainer title="오늘의 추천"></SlideContainer>
        <GridContainer title="배우기"></GridContainer>
        <GridContainer title="따라하기"></GridContainer>
        <GridContainer title="소리"></GridContainer>
      </IonContent>
    </IonPage>
  );
};

export default MainTab;
