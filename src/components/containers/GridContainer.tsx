import React from "react";
import "./Container.css";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";

interface ContainerProps {
  title: string;
}

const GridContainer: React.FC<ContainerProps> = ({ title }) => {
  return (
    <div className="slide-container">
      <h1>{title}</h1>
      <div className="grid">
        {[...new Array(9)].map((_, i) => (
          <IonCard key={i}>
            <IonCardHeader>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              <IonCardTitle>Card Title</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>content</IonCardContent>
          </IonCard>
        ))}
      </div>
    </div>
  );
};

export default GridContainer;
