import React, { useState } from "react";
import {
  IonButton,
  IonSegmentButton,
  IonSegment,
  IonLabel,
} from "@ionic/react";

import history from "reactHistory";
import List from "./list";

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
      {segmentState === "list" && <List></List>}
      {segmentState === "stored" && <div>stored</div>}
      <IonButton expand="block" onClick={() => history.push("./tab2/player")}>
        시작하기
      </IonButton>
    </div>
  );
};

export default AudioPlayerList;
