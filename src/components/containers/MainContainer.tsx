import React from "react";
import "./Container.css";

interface ContainerProps {
  name: string;
}

const MainContainer: React.FC<ContainerProps> = ({ name }) => {
  const random = Math.floor(Math.random() * 3);
  return (
    <div className={`main container main-img${random}`}>
      <p style={{color: "black"}}>안녕하세요,</p>
      <p style={{color: "black"}}>
        <strong>{name}</strong> 님
      </p>
    </div>
  );
};

export default MainContainer;
