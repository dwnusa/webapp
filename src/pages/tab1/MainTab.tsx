import React, { useState, useEffect } from "react";
import { IonContent, IonPage, IonModal } from "@ionic/react";
import MainContainer from "components/containers/MainContainer";
import SlideContainer from "components/containers/SlideContainer";
import GridContainer from "components/containers/GridContainer";
import SurveyAlert from "components/alerts/SurveyAlert";
import Survey from "components/survey/Survey";
import { useParams } from "react-router-dom";

const MainTab: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("익명");
  const [qactive, setQactive] = useState(false);
  const { userId } = useParams();

  useEffect(() => {
    // console.log(userId);
    fetch(`${process.env.REACT_APP_BASE_URL}/user/${userId}`)
      .then((res) => res.json())
      .then((res) => {
        setUsername(res[0].USERNAME);
        setQactive(res[0].QACTIVE);
        console.log("QACTIVE: ", res[0].QACTIVE);
      });
  }, []);

  return (
    <IonPage>
      <IonContent>
        <IonModal isOpen={showModal} cssClass="my-custom-class">
          <Survey setShowModal={setShowModal} userId={userId}></Survey>
        </IonModal>
        {!qactive && <SurveyAlert setShowModal={setShowModal}></SurveyAlert>}
        {/*<MainContainer name="김홍도" />*/}
        <MainContainer name={username} />
        <SlideContainer title="오늘의 추천 수면"></SlideContainer>
        <GridContainer title="수면 카테고리"></GridContainer>
      </IonContent>
    </IonPage>
  );
};

export default MainTab;
