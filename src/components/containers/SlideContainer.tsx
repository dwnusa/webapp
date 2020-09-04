import React from "react";
import "./Container.css";
import { IonSlides, IonSlide } from "@ionic/react";
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

const SlideContainer: React.FC<ContainerProps> = ({
  title,
  contents,
  recommend,
}) => {
  return (
    <div className="slide-container">
      <h2>{title}</h2>
      <IonSlides pager={true} options={slideOpts}>
        {recommend.map((v, i) => {
          return (
            <IonSlide key={i}>
              <div
                className="content"
                style={{
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "160px",
                    height: "160px",
                  }}
                >
                  <img
                    src={`${contents[v].thumbnail}`}
                    alt="nothing"
                    style={{ height: "90%" }}
                  />
                </div>
                <div className="content-text-box">
                  <div>{contents[v].TITLE}</div>
                  <br />
                  <div>"{contents[v].COMMENT1}"</div>
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
