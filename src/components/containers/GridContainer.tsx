import React from "react";
import "./Container.css";

interface ContainerProps {
  title: string;
}

const GridContainer: React.FC<ContainerProps> = ({ title }) => {
  return (
    <div className="slide-container">
      <h1>{title}</h1>
      <div className="grid">
        <div className="content"></div>
        <div className="content"></div>
        <div className="content"></div>
        <div className="content"></div>
        <div className="content"></div>
        <div className="content"></div>
      </div>
    </div>
  );
};

export default GridContainer;
