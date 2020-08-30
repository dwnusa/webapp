import React from "react";
import "./index.css";
import { IonIcon } from "@ionic/react";
import { play, arrowDown } from "ionicons/icons";
import "./index.css";
import { bindActionCreators } from "redux";
import * as Actions from "actions";
import { connect } from "react-redux";
import { Content } from "types";

interface ListItemProps {
  actions: any;
  content: Content;
}

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(Actions, dispatch),
});

const ListItem: React.FC<ListItemProps> = ({ content, actions }) => {
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
          <IonIcon
            icon={arrowDown}
            onClick={() => {
              actions.addContent(content);
            }}
          ></IonIcon>
        </div>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(ListItem);
