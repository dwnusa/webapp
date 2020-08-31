import React, { useState, useEffect } from "react";
import ListItem from "./listItem";
import "./index.css";
import { Content } from "types/content";

const List: React.FC = () => {
  const [contentsState, contentsSetState] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/content/`)
      .then((res) => res.json())
      .then((res) => {
        setLoading(true);
        contentsSetState(res);
      });
    setLoading(false);
  }, []);

  return (
    <div className="grid-list">
      {loading &&
        contentsState.map((content, i) => {
          return <ListItem content={content} key={i} />;
        })}
    </div>
  );
};

export default List;
