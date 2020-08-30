import React from "react";
import "./index.css";
import StoredListItem from "./storedListItem";
import { IonButton } from "@ionic/react";
import history from "reactHistory";
import { connect } from "react-redux";
import { Content } from "types";
import { bindActionCreators } from "redux";
import * as Actions from "actions";

interface StoredListProps {
  contents: Content[];
  actions: any;
}

const mapStateToProps = (state: any) => {
  const { content } = state;
  return {
    contents: content.contents,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(Actions, dispatch),
});

const StoredList: React.FC<StoredListProps> = ({ contents, actions }) => {
  return (
    <div className="row-list">
      {contents.map((content, i) => {
        return (
          <StoredListItem
            content={content}
            key={i}
            deleteContent={actions.deleteContent}
          />
        );
      })}
      <IonButton
        expand="block"
        onClick={() => {
          actions.setPlay(true);
          history.push("./tab2/player");
        }}
      >
        시작하기
      </IonButton>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StoredList);
