import React from "react";
import { IonPage } from "@ionic/react";
import CalendarComponent from "../components/calendar";
import "./RecordTab.css";

const RecordTab: React.FC = () => {
  return (
    <IonPage>
      <div className="calendar-container">
        <CalendarComponent></CalendarComponent>
      </div>
    </IonPage>
  );
};

export default RecordTab;
