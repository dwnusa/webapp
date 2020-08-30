import React from "react";
import "./index.css";
import { IonIcon } from "@ionic/react";
import { play, arrowDown } from "ionicons/icons";
import "./index.css";
import { Content } from "types";

interface ListItemProp {
  content: Content;
}

const ListItem: React.FC<ListItemProp> = ({ content }) => {
  const listItemStyle = {
    background: `url("${content.thumbnail}")`,
    backgroundSize: "100%",
  };
  return (
    <div className="list-item" style={listItemStyle}>
      <div className="actions">
        <div>{content.playingTime}</div>
        <div>
          <IonIcon icon={play}></IonIcon>
          <IonIcon icon={arrowDown}></IonIcon>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
