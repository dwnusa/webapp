import React from "react";
import "./Container.css";

interface ContainerProps {
  name: string;
}

const MainContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="main container">
      <p>안녕하세요,</p>
      <p>
        <strong>{name}</strong> 님
      </p>
    </div>
  );
};

export default MainContainer;
