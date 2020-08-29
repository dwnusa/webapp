import React from "react";
import "./index.css";
import { IonIcon } from "@ionic/react";
import { play, arrowDown } from "ionicons/icons";
import "./index.css";

const ListItem: React.FC = () => {
  return (
    <div className="list-item">
      <div className="actions">
        <div>10:21</div>
        <div>
          <IonIcon icon={play}></IonIcon>
          <IonIcon icon={arrowDown}></IonIcon>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
