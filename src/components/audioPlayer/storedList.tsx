import React, { useState } from "react";
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
  const [alarmAct, setAlarmAct] = useState<boolean>(true);
  return (
      <div className="row-list">
        <div className="sorted-info">
          <p>총 42분 17초</p>
          <p className={`${alarmAct ? 'sorted-alarm':''}`} onClick={()=>setAlarmAct(!alarmAct)}>30분 알림 ON</p>
        </div>
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
          disabled={contents.length === 0}
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
