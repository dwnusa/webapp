import React, { useState } from "react";
import { IonSegmentButton, IonSegment, IonLabel } from "@ionic/react";

import List from "./list";
import "./index.css";
import StoredList from "./storedList";

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
      <div className="list-wrapper">
        {segmentState === "list" && <List />}
        {segmentState === "stored" && <StoredList />}
      </div>
    </div>
  );
};

export default AudioPlayerList;
