import React from "react";
import "./index.css";
import { IonIcon } from "@ionic/react";
import { trash } from "ionicons/icons";
import "./index.css";
import sampleImg from "assets/sample.png";

const StoredListItem: React.FC = () => {
  return (
    <div className="stored-list-item">
      <div className="content-info">
        <span>
          <img alt="" src={sampleImg} width="75" height="75"></img>
        </span>
        <span className="text-content">
          <div>이름</div>
          <div>10:21</div>
        </span>
      </div>
      <div className="delete-action">
        <IonIcon icon={trash}></IonIcon>
      </div>
    </div>
  );
};

export default StoredListItem;
