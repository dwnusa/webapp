import React, { useState} from "react";
import "./index.css";
import { IonIcon } from "@ionic/react";
import { play, arrowDown, pause } from "ionicons/icons";
import "./index.css";
import { bindActionCreators } from "redux";
import * as Actions from "actions";
import { connect } from "react-redux";
import { Content } from "types";
// import history from "reactHistory";
// import { get } from "../../services";
import AudioPlayer from "react-h5-audio-player";

interface ListItemProps {
  actions: any;
  content: Content;
  // playingId: number;
  // itemId: number;
}

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(Actions, dispatch),
});

const ListItem: React.FC<ListItemProps> = ({ content, actions
                                             //, playingId,itemId
}) => {
  const [playing, playingSetState] = useState<boolean>(false);
  const listItemStyle = {
    background: `url("${content.thumbnail}")`,
    backgroundSize: "100%",
    // border: "red solid",
  };

  // useEffect(() => {
  //   console.log("useEffect: ", itemId, playingId)
  // }, [itemId, playingId]);

  return (
    <div className="list-item" style={listItemStyle}>
      <div className="list-item-container">
        <div className="file-name">{content.FNAME}</div>
        <div className="actions">
          <div>{content.playingTime || "00:00"}</div>
          <div>
            {playing && <AudioPlayer
              style={{display:"none"}}
              src={process.env.REACT_APP_BASE_URL+content.FILE}
              autoPlay
            />}
            <IonIcon
              icon={`${playing ? pause:play}`}
              onClick={() => {
                playingSetState(!playing)
                // console.log('listiem: ', playing)
                // actions.addContentFirstOrder(content);
                // actions.setPlay(true);
                // history.push("./tab2/player");
              }}
            ></IonIcon>
            <IonIcon
              icon={arrowDown}
              onClick={() => {
                actions.addContent(content);
              }}
            ></IonIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(ListItem);
