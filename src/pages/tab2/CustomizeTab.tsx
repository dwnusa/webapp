import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import "./CustomizeTab.css";
import AudioPlayerList from "components/tab2/audioPlayer";
import { useParams } from "react-router-dom";

const CustomizeTab: React.FC = () => {
  const { userId } = useParams();
  return (
    <IonPage>
      <IonContent>
        <div className="container custom-tab">
          <p>내게 맞는</p>
          <p>
            <strong>수면 프로그램</strong>을
          </p>
          <p>만들어요!</p>
          <AudioPlayerList userId={userId}></AudioPlayerList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CustomizeTab;
