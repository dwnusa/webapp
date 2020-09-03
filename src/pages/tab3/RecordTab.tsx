import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import "./RecordTab.css";
import Chart1 from "components/chart/chart1";
import RecordComponent from "components/record";

const RecordTab: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="record-container">
          <p>낮잠을 줄이고,</p>
          <p>따뜻한 차를 마셔봐요</p>
          <p>- 닥터자마</p>
        </div>
        <Chart1 />
        <RecordComponent />
      </IonContent>
    </IonPage>
  );
};

export default RecordTab;
