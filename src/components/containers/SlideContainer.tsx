import React from "react";
import "./Container.css";

interface ContainerProps {
  title: string;
}

const SlideContainer: React.FC<ContainerProps> = ({ title }) => {
  return (
    <div className="slide-container">
      <h1>{title}</h1>
      <div className="overflow">
        <div className="slide">
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
        </div>
      </div>
    </div>
  );
};

export default SlideContainer;
