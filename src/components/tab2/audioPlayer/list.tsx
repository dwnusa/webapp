import React, { useState, useEffect } from "react";
import ListItem from "./listItem";
import "./index.css";
import { Content, ContentType } from "types/content";
import { get } from "services";
import { httpStatus } from "types";
interface ListProps {
  setShowToast: any
}
const List: React.FC<ListProps> = ({setShowToast}) => {
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
      <p>소리 컨텐츠</p>
      <div className="grid-list">
        {!loading &&
          contentsState
            .filter((content) => content.TYPE === ContentType.Audio)
            .map((content, i) => {
              return <ListItem setShowToast={setShowToast} content={content} key={i} />;
            })}
      </div>
      <p>배움 컨텐츠</p>
      <div className="grid-list">
        {!loading &&
          contentsState
            .filter((content) => content.TYPE === ContentType.Lecture)
            .map((content, i) => {
              return <ListItem setShowToast={setShowToast} content={content} key={i} />;
            })}
      </div>
    </div>
  );
};

export default List;
