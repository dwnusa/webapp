import React from "react";
import "./Container.css";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import { Content } from "../../types";

interface ContainerProps {
  title: string;
  contents: Content[];
  recommend: number[];
}

const GridContainer: React.FC<ContainerProps> = ({
  title,
  contents,
  recommend,
}) => {
  return (
    <div className="slide-container">
      <h2>{title}</h2>
      <div className="grid">
        {recommend.map((v, i) => (
          <IonCard
            key={i}
            style={{
              background: `url(${contents[v].thumbnail})`,
              backgroundSize: "100%",
              opacity: "0.6",
            }}
          >
            <IonCardHeader>
              <IonCardSubtitle>{contents[v].FNAME}</IonCardSubtitle>
              <IonCardTitle>{contents[v].CAT}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>{contents[v].TYPE}</IonCardContent>
          </IonCard>
        ))}
      </div>
    </div>
  );
};

export default GridContainer;
