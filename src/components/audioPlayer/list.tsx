import React from "react";
import ListItem from "./listItem";
import "./index.css";

const List: React.FC = () => {
  return (
    <div className="grid-list">
      {[...new Array(4)].map(() => {
        return <ListItem></ListItem>;
      })}
    </div>
  );
};

export default List;
