import React from "react";
import "./Container.css";
import { IonSlides, IonSlide } from "@ionic/react";

interface ContainerProps {
  title: string;
}

const slideOpts = {
  initialSlide: 0,
  slidesPerView: 1.5,
  speed: 400,
};

const SlideContainer: React.FC<ContainerProps> = ({ title }) => {
  return (
    <div className="slide-container">
      <h2>{title}</h2>
      <IonSlides pager={true} options={slideOpts}>
        {[...new Array(6)].map((_, i) => {
          return (
            <IonSlide key={i}>
              <div className="content"></div>
            </IonSlide>
          );
        })}
      </IonSlides>
    </div>
  );
};

export default SlideContainer;
