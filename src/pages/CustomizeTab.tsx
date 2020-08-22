import React from "react";
import { IonPage, IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";
import "./CustomizeTab.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const CustomizeTab: React.FC = () => {
  return (
    <IonPage>
      <div className="container custom-tab">
        <p>오늘도 건강한 수면을</p>
        <p>
          <strong>스케줄링</strong> 해봐요!
        </p>
        <IonSegment
          className="custom-tab-segment"
          onIonChange={(e) => console.log("Segment selected", e.detail.value)}
        >
          <IonSegmentButton value="10">
            <IonLabel>10분</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="20">
            <IonLabel>20분</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="30">
            <IonLabel>30분</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        <AudioPlayer
          src="https://t1.daumcdn.net/cfile/tistory/213E9D465854DA2301?original"
          onPlay={(e) => console.log("onPlay")}
        />
      </div>
    </IonPage>
  );
};

export default CustomizeTab;
