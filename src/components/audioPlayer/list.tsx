import React from "react";
import ListItem from "./listItem";
import "./index.css";
import { Content, ContentType } from "types/content";

const contents: Content[] = [
  {
    id: 1,
    FNAME: "파일 이름",
    CAT: "",
    FILE: "",
    TYPE: ContentType.Audio,
    playingTime: "10:21",
    thumbnail: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    url: "https://t1.daumcdn.net/cfile/tistory/213E9D465854DA2301?original",
  },
];

const List: React.FC = () => {
  return (
    <div className="grid-list">
      {contents.map((content, i) => {
        return <ListItem content={content} key={i} />;
      })}
    </div>
  );
};

export default List;
