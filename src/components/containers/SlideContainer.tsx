import React, { useState } from "react";
import "./Container.css";
import {
  IonSlides,
  IonSlide,
} from "@ionic/react";
import { Content } from "../../types";

interface ContainerProps {
  title: string;
  contents: Content[];
  recommend: number[];
}

const slideOpts = {
  initialSlide: 0,
  slidesPerView: 1.5,
  speed: 400,
};

const SlideContainer: React.FC<ContainerProps> = ({ title,contents,recommend }) => {
  const listItemStyle = {
    background: `url("${contents[0].thumbnail}")`,
    backgroundSize: "100%",
    // border: "red solid",
  };
  console.log("contents: ", contents)
  return (
    <div className="slide-container">
      <h2>{title}</h2>
      <IonSlides pager={true} options={slideOpts}>
        {recommend.map((v, i) => {
          return (
            <IonSlide key={i}>
              {/*<div className="content" style={{background: `url(${contents[v].thumbnail})`, backgroundSize: "100%", textAlign:"left"}}>*/}
              <div className="content" style={{
                // border:"red solid",
                // backgroundColor: "#35383C",
                // backgroundSize: "100%",

                textAlign:"left",
                display:"flex", flexDirection:"row",
                justifyContent:"center", alignItems:"center",
              }}>
              {/*<IonCardHeader>*/}
              {/*  <IonCardSubtitle>123123</IonCardSubtitle>*/}
              {/*  <IonCardTitle>321321</IonCardTitle>*/}
              {/*</IonCardHeader>*/}
              {/*  <div style={{background: `url(${contents[v].thumbnail})`, backgroundSize: "100%", width:"100%", height:"100%"}}>aaa</div>*/}
                <div style={{display:"flex", alignItems:"center", width: "160px", height:"160px"}}>
                  <img src={`${contents[v].thumbnail}`}/>
                </div>
                <div className="content-text-box">
                  <div>{contents[v].TITLE}</div>
                  <div>{contents[v].COMMENT1}</div>
                  <div>{contents[v].COMMENT2}</div>
                </div>
              </div>
            </IonSlide>
          );
        })}
      </IonSlides>
    </div>
  );
};

export default SlideContainer;
