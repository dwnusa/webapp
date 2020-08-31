import React, { useState } from "react";
import { IonPage, IonFab, IonIcon, IonFooter, IonContent } from "@ionic/react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { close } from "ionicons/icons";
import history from "reactHistory";
import sampleImg from "assets/sample.png";
import "./index.css";
import { connect } from "react-redux";
import { Content } from "types";

const mapStateToProps = (state: any) => {
  const { content } = state;
  return {
    contents: content.contents,
  };
};

interface PlayerPageProps {
  contents: Content[];
}

const PlayerPage: React.FC<PlayerPageProps> = ({ contents }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentContent, setCurrentContent] = useState<Content>(contents[0]);

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
          header={currentContent.FNAME}
          src={process.env.REACT_APP_BASE_URL + currentContent.FILE}
          // src={`http://localhost:8000` + currentContent.FILE}
          autoPlay
          showSkipControls={true}
          onClickPrevious={() => {
            if (currentIndex > 0) {
              setCurrentIndex(currentIndex - 1);
              setCurrentContent(contents[currentIndex - 1]);
            }
          }}
          onClickNext={() => {
            if (currentIndex < contents.length - 1) {
              setCurrentIndex(currentIndex + 1);
              setCurrentContent(contents[currentIndex + 1]);
            }
          }}
          onEnded={() => {
            if (currentIndex < contents.length - 1) {
              setCurrentIndex(currentIndex + 1);
              setCurrentContent(contents[currentIndex + 1]);
            }
          }}
        />
      </IonFooter>
    </IonPage>
  );
};

export default connect(mapStateToProps)(PlayerPage);
