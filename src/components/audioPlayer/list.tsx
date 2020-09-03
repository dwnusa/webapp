import React, { useState, useEffect, useCallback } from "react";
import ListItem from "./listItem";
import "./index.css";
import { Content } from "types/content";
import { get, post } from "services";
import { httpStatus } from "types";
import AudioPlayer from "react-h5-audio-player";
import { IonFooter } from "@ionic/react";

const List: React.FC = () => {
  const [contentsState, contentsSetState] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get("/content").then((res) => {
      setLoading(false);
      if (res.status === httpStatus.OK) {
        contentsSetState(res.result);
      }
    });
    setLoading(true);
  }, []);

  return (
    <div>
      {console.log(contentsState)}
      <p>소리 컨텐츠</p>
      <div className="grid-list">
        {!loading &&
        // contentsState.filter((content, i)=>content.TYPE==="audio").map((content, i) => {
        contentsState.filter((content, i)=>i<4).map((content, i) => {
          return (
            <ListItem content={content} key={i}/>
          );
        })
        }
      </div>
      <p>배움 컨텐츠</p>
      <div className="grid-list">
        {!loading &&
        // contentsState.filter((content, i)=>content.TYPE==="lecture").map((content, i) => {
          contentsState.filter((content, i)=>i>=4).map((content, i) => {
            return (
              <ListItem content={content} key={i}/>
            );
          })
        }
      </div>
    </div>
  );
};

export default List;
