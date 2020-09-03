import React, { useState } from "react";
import { IonSegmentButton, IonSegment, IonLabel } from "@ionic/react";

import List from "./list";
import "./index.css";
import StoredList from "./storedList";

const AudioPlayerList: React.FC = () => {
  const [segmentState, setSegmentState] = useState<string>("list");
  const [allListAct, setAllListAct] = useState<boolean>(true);
  const [storedAct, setStoredAct] = useState<boolean>(false);

  return (
    <div>
      <IonSegment
        className="custom-tab-segment"
        onIonChange={(e) => {
          setSegmentState(e.detail.value as string);
        }}
        value={segmentState}
      >
        <IonSegmentButton value="list" className={`${allListAct ? `all-list`:''}`} onClick={()=>{setAllListAct(true);setStoredAct(false); }}>
          <IonLabel>전체 보기</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="stored" className={`${storedAct ? `sorted-list`:''}`} onClick={()=>{setAllListAct(false);setStoredAct(true); }}>
          <IonLabel>잠! 바구니</IonLabel>
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
