import React from "react";
import { IonAlert } from "@ionic/react";

interface AlertProps {
  setShowModal: (trigger: boolean) => void;
}

const SurveyAlert: React.FC<AlertProps> = ({ setShowModal }) => {
  return (
    <IonAlert
      isOpen={true}
      cssClass="my-custom-class"
      header={"Info"}
      message={
        "나에게 맞는 수면정보를 위해 몇 가지 정보를 알려주세요! (예상 소요시간 3분)"
      }
      buttons={[
        "괜찮아요",
        {
          text: "네, 좋아요",
          role: "ok",
          cssClass: "primary",
          handler: () => {
            setShowModal(true);
          },
        },
      ]}
    />
  );
};

export default SurveyAlert;
