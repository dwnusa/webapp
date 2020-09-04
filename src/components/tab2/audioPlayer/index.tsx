import React, { useState } from "react";
import { IonSegmentButton, IonSegment, IonLabel, IonToast } from "@ionic/react";

import List from "./list";
import "./index.css";
import StoredList from "./storedList";

interface AudioProps {
  userId: number;
}

const AudioPlayerList: React.FC<AudioProps> = ({ userId }) => {
  const [segmentState, setSegmentState] = useState<string>("list");
const [showToast, setShowToast] = useState(false)
  return (
    <div>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message="추가 되었습니다."
        duration={200}
        position="top"
      />
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
        {segmentState === "list" && <List setShowToast={setShowToast}/>}
        {segmentState === "stored" && <StoredList userId={userId} />}
      </div>
    </div>
  );
};

export default AudioPlayerList;
