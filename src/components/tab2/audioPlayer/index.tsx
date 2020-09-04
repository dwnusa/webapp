import React, { useState } from "react";
import { IonSegmentButton, IonSegment, IonLabel } from "@ionic/react";

import List from "./list";
import "./index.css";
import StoredList from "./storedList";

interface AudioProps {
  userId: number;
}

const AudioPlayerList: React.FC<AudioProps> = ({userId}) => {
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
        <IonSegmentButton
          value="list"
          className={`${segmentState === "list" ? `all-list` : ""}`}
        >
          <IonLabel>전체 보기</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton
          value="stored"
          className={`${segmentState === "stored" ? `sorted-list` : ""}`}
        >
          <IonLabel>잠! 바구니</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <div className="list-wrapper">
        {segmentState === "list" && <List />}
        {segmentState === "stored" && <StoredList userId={userId}/>}
      </div>
    </div>
  );
};

export default AudioPlayerList;
