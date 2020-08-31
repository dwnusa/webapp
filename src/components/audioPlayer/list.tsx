import React, { useState, useEffect } from "react";
import ListItem from "./listItem";
import "./index.css";
import { Content } from "types/content";
import { get } from "services";
import { httpStatus } from "types";

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
    <div className="grid-list">
      {!loading &&
        contentsState.map((content, i) => {
          return <ListItem content={content} key={i} />;
        })}
    </div>
  );
};

export default List;
