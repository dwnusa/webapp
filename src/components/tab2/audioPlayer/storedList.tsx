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
  userId: number;
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

const StoredList: React.FC<StoredListProps> = ({
  contents,
  actions,
  userId,
}) => {
  const [alarmAct, setAlarmAct] = useState<boolean>(true);
  const sumPlayingTime = contents.reduce<string>(
    (
      previousValue: string,
      currentValue: Content,
      currentIndex: number,
      array: Content[]
    ): string => {
      const [min1 = "0", sec1 = "0"] = previousValue?.split(":") || [];
      const [min2 = "0", sec2 = "0"] = currentValue.playingTime.split(":");

      let result = {
        min: +min1 + +min2,
        sec: +sec1 + +sec2,
      };

      if (result.sec >= 60) {
        result = {
          min: result.min + 1,
          sec: result.sec - 60,
        };
      }

      return `${result.min}:${result.sec}`;
    },
    ""
  );

  return (
    <div className="row-list">
      <div className="sorted-info">
        {+sumPlayingTime.split(":")[0] > 0 &&
          +sumPlayingTime.split(":")[1] > 0 && (
            <p>
              총 {sumPlayingTime.split(":")[0]}분 {sumPlayingTime.split(":")[1]}
              초
            </p>
          )}

        <p
          className={`${alarmAct ? "sorted-alarm" : ""}`}
          onClick={() => setAlarmAct(!alarmAct)}
        >
          30분 알림 ON
        </p>
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
          history.push("./" + userId + "/player");
        }}
      >
        시작하기
      </IonButton>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StoredList);
