import React, { useState, useEffect } from "react";
import { IonPage, IonFab, IonIcon, IonFooter, IonContent } from "@ionic/react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { close } from "ionicons/icons";
import history from "reactHistory";
import "./index.css";
import { connect } from "react-redux";
import { Content } from "types";
import { bindActionCreators } from "redux";
import * as Actions from "actions";
import { useParams } from "react-router-dom";

const mapStateToProps = (state: any) => {
  const { content, audioPlayer } = state;
  return {
    contents: content.contents,
    play: audioPlayer.play,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(Actions, dispatch),
});

interface PlayerPageProps {
  contents: Content[];
  play: boolean;
  actions: any;
}

const PlayerPage: React.FC<PlayerPageProps> = ({ contents, play, actions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { userId } = useParams();
  const [currentContent, setCurrentContent] = useState<Content | null>(
    contents[0]
  );

  useEffect(() => {
    if (contents.length) {
      if (play) {
        setCurrentIndex(0);
        setCurrentContent(contents[0]);
      }
    } else {
      setCurrentContent(null);
    }
  }, [contents, play]);

  const playNext = (): void => {
    if (currentIndex < contents.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentContent(contents[currentIndex + 1]);
    }
  };

  const playBefore = (): void => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentContent(contents[currentIndex - 1]);
    }
  };

  return (
    <IonPage>
      <IonFab
        className="custom-icon"
        vertical="top"
        horizontal="end"
        slot="fixed"
      >
        <IonIcon icon={close} onClick={() => history.push("/tab2/" + userId)} />
      </IonFab>
      <IonContent className="audio-player-img">
        <img alt="" src={currentContent?.thumbnail} />
      </IonContent>
      <IonFooter>
        <AudioPlayer
          header={currentContent?.TITLE}
          src={
            currentContent?.FILE
              ? process.env.REACT_APP_BASE_URL + currentContent.FILE
              : ""
          }
          autoPlay
          showSkipControls={true}
          onClickPrevious={playBefore}
          onClickNext={playNext}
          onEnded={playNext}
          onPause={() => {
            actions.setPlay(false);
          }}
        />
      </IonFooter>
    </IonPage>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage);
