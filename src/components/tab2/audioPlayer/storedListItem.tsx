import React from "react";
import "./index.css";
import { IonIcon } from "@ionic/react";
import { trash } from "ionicons/icons";
import "./index.css";
import { Content } from "types";

interface StoredListItemProps {
  content: Content;
  deleteContent: (id: number) => void;
}

const StoredListItem: React.FC<StoredListItemProps> = ({
  content,
  deleteContent,
}) => {
  return (
    <div className="stored-list-item">
      <div className="content-info">
        <span>
          <img alt="" src={content.thumbnail} width="75" height="75"></img>
        </span>
        <span className="text-content">
          <div>{content.TITLE}</div>
          <div>{content.playingTime}</div>
        </span>
      </div>
      <div
        className="delete-action"
        onClick={() => {
          deleteContent(content.id);
        }}
      >
        <IonIcon icon={trash}></IonIcon>
      </div>
    </div>
  );
};

export default StoredListItem;
