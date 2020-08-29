import React from "react";
import { IonAlert } from "@ionic/react";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  const { user } = state;
  return {
    isOpen: user.showSurveyPopup,
  };
};

interface AlertProps {
  setShowModal: (trigger: boolean) => void;
  isOpen: boolean;
}

const SurveyAlert: React.FC<AlertProps> = ({ setShowModal, isOpen }) => {
  console.log(isOpen);
  return (
    <IonAlert
      isOpen={isOpen}
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

export default connect(mapStateToProps)(SurveyAlert);
