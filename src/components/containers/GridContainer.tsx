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
      <h2>{title}</h2>
      <div className="grid">
        {[...new Array(2)].map((_, i) => (
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
