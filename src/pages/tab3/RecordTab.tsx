import React from "react";
import { IonPage } from "@ionic/react";
import CalendarComponent from "components/calendar";
import "./RecordTab.css";
import Chart1 from "components/chart/chart1";

const RecordTab: React.FC = () => {
  return (
    <IonPage>
      <div className="calendar-container">
        <CalendarComponent></CalendarComponent>
      </div>
      <Chart1></Chart1>
    </IonPage>
  );
};

export default RecordTab;
