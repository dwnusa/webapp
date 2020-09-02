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
          <p>Text</p>
        </div>
        <Chart1 />
        <RecordComponent />
      </IonContent>
    </IonPage>
  );
};

export default RecordTab;
