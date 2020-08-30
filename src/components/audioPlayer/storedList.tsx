import React from "react";
import "./index.css";
import StoredListItem from "./storedListItem";
import { IonButton } from "@ionic/react";
import history from "reactHistory";
import { setPlay } from "actions";
import { connect } from "react-redux";
import { Content } from "types";

interface StoredListProps {
  contents: Content[];
  setPlay: any;
}

const mapStateToProps = (state: any) => {
  const { content } = state;
  return {
    contents: content.contents,
  };
};

const StoredList: React.FC<StoredListProps> = ({ setPlay, contents }) => {
  return (
    <div className="row-list">
      {contents.map((content, i) => {
        return <StoredListItem content={content} key={i} />;
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

export default connect(mapStateToProps, { setPlay })(StoredList);
