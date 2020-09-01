import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import "./RecordTab.css";
import Chart1 from "components/chart/chart1";

const RecordTab: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="record-container">
          <p>Text</p>
        </div>
        <div className="chart">
          <Chart1></Chart1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RecordTab;
