import React from "react";
import { IonPage, IonFab, IonIcon, IonFooter, IonContent } from "@ionic/react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { close } from "ionicons/icons";
import history from "reactHistory";
import sampleImg from "assets/sample.png";
import "./index.css";

const PlayerPage: React.FC = () => {
  return (
    <IonPage>
      <IonFab vertical="top" horizontal="end" slot="fixed">
        <IonIcon icon={close} onClick={() => history.push("/tab2")} />
      </IonFab>
      <IonContent className="audio-player-img">
        <img alt="" src={sampleImg} />
      </IonContent>
      <IonFooter>
        <AudioPlayer
          src="https://t1.daumcdn.net/cfile/tistory/213E9D465854DA2301?original"
          onPlay={(e) => console.log("onPlay")}
        />
      </IonFooter>
    </IonPage>
  );
};

export default PlayerPage;
