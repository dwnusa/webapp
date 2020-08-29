import React from "react";
import "./index.css";
import StoredListItem from "./storedListItem";
import { IonButton } from "@ionic/react";
import history from "reactHistory";
import { setPlay } from "actions";
import { connect } from "react-redux";

const StoredList: React.FC<any> = ({ setPlay }) => {
  return (
    <div className="row-list">
      {[...new Array(4)].map((_, i) => {
        return <StoredListItem key={i}></StoredListItem>;
      })}
      <IonButton
        expand="block"
        onClick={() => {
          setPlay(true);
          history.push("./tab2/player");
        }}
      >
        시작하기
      </IonButton>
    </div>
  );
};

export default connect(null, { setPlay })(StoredList);
