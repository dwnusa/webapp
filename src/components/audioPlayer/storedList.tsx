import React from "react";
import "./index.css";
import StoredListItem from "./storedListItem";
import { IonButton } from "@ionic/react";
import history from "reactHistory";

const StoredList: React.FC = () => {
  return (
    <div className="row-list">
      {[...new Array(4)].map(() => {
        return <StoredListItem></StoredListItem>;
      })}
      <IonButton expand="block" onClick={() => history.push("./tab2/player")}>
        시작하기
      </IonButton>
    </div>
  );
};

export default StoredList;
