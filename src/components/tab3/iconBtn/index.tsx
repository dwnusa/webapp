import React from "react";
import styled from "styled-components";
import { RecordIcon } from "assets";

interface IconBtnProps {
  icon: RecordIcon;
  active: boolean;
  onClick: () => void;
}

const IconBtn: React.FC<IconBtnProps> = ({ icon, active, onClick }) => {
  return (
    <Container onClick={onClick}>
      <img
        className={active ? "active" : "deactivate"}
        alt={icon.text}
        src={icon.path}
      ></img>
      <div className={active ? "active" : "deactivate"}>{icon.text}</div>
    </Container>
  );
};

const Container = styled.div`
  width: 97.94px;
  height: 98.95px;
  background: #34373b;
  display: grid;
  grid-template-rows: 68.95px 30px;
  align-items: center;
  justify-items: center;
  img {
    transform: translateY(5px);
  }
  .deactivate {
    opacity: 0.5;
  }
`;

export default IconBtn;
