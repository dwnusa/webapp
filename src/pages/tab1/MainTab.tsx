import React, { useState, useEffect } from "react";
import { IonContent, IonPage, IonModal } from "@ionic/react";
import MainContainer from "components/containers/MainContainer";
import SlideContainer from "components/containers/SlideContainer";
import SurveyAlert from "components/tab1/alerts/SurveyAlert";
import Survey from "components/tab1/survey/Survey";
import { useParams } from "react-router-dom";
import { get } from "services";
import { Content, httpStatus } from "types";

interface MainTabProps {
  updateUserId: (id:number)=>void;
}

const MainTab: React.FC<MainTabProps> = ({updateUserId}) => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("익명");
  const [qactive, setQactive] = useState(false);
  const { userId } = useParams();
  const [loading, setloading] = useState(true);
  const [loadingContents, setloadingContents] = useState(true);
  const [contentsState, contentsSetState] = useState<Content[]>([]);

  useEffect(() => {
    const id: number = userId || 1;
    get(`/user/${id}`).then((res) => {
      if (res.status === httpStatus.OK) {
        setUsername(res.result[0].USERNAME);
        setQactive(res.result[0].QACTIVE);
        setloading(false);
      }
    });

    get("/content").then((res) => {
      setloadingContents(true);
      if (res.status === httpStatus.OK) {
        contentsSetState(res.result);
      }
      setloadingContents(false);
    });
    setloading(true);
    updateUserId(id);

  }, [userId, updateUserId]);
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
        {!loadingContents && <SlideContainer title="오늘의 추천" contents={contentsState} recommend={[5, 6, 7, 3]}></SlideContainer> }
        {!loadingContents && <SlideContainer title="배우기" contents={contentsState} recommend={[0, 1, 2]}></SlideContainer> }
        {!loadingContents && <SlideContainer title="따라하기" contents={contentsState} recommend={[8, 9, 3]}></SlideContainer> }
        {!loadingContents && <SlideContainer title="소리" contents={contentsState} recommend={[4, 5, 6, 7]}></SlideContainer> }
      </IonContent>
    </IonPage>
  );
};

export default MainTab;
