import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import "./CustomizeTab.css";
import AudioPlayerList from "components/audioPlayer";

const CustomizeTab: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="container custom-tab">
          <p>오늘도 건강한 수면을</p>
          <p>
            <strong>스케줄링</strong> 해봐요!
          </p>
          <AudioPlayerList></AudioPlayerList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CustomizeTab;
