import React, { useState } from "react";
import {
  IonButton,
  IonSegmentButton,
  IonSegment,
  IonLabel,
} from "@ionic/react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const AudioPlayerList: React.FC = () => {
  const [segmentState, setSegmentState] = useState<string>("list");

  return (
    <div>
      <IonSegment
        className="custom-tab-segment"
        onIonChange={(e) => {
          setSegmentState(e.detail.value as string);
        }}
        value={segmentState}
      >
        <IonSegmentButton value="list">
          <IonLabel>컨텐츠 담기</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="stored">
          <IonLabel>담은 컨텐츠</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      {segmentState === "list" && <div>list</div>}
      {segmentState === "stored" && <div>stored</div>}
      {segmentState === "start" && (
        <div>
          <AudioPlayer
            src="https://t1.daumcdn.net/cfile/tistory/213E9D465854DA2301?original"
            onPlay={(e) => console.log("onPlay")}
          />
        </div>
      )}

      <IonButton onClick={() => setSegmentState("start")}>시작하기</IonButton>
    </div>
  );
};

export default AudioPlayerList;
