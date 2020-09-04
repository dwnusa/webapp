// import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { homeSharp, moonSharp, bookSharp } from "ionicons/icons";
import MainTab from "./pages/tab1/MainTab";
import CustomizeTab from "./pages/tab2/CustomizeTab";
import RecordTab from "./pages/tab3/RecordTab";
import RecordingPage from "./pages/tab3/recording/RecordingPage";
import PlayerPage from "./pages/tab2/player";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import "./style.css";

import history from "./reactHistory";

import React, { Component } from "react";

interface State{
  userId:number;
}

class App extends Component {
  state:State = {
    userId: 1,
  }
  // constructor(props: any) {
  //   super(props);
  //   this.state = {
  //     userId: 1,
  //   };
  // }

  updateUserId = (id: number) =>{
    // console.log("id: ", id)
    this.setState({
      userId: id,
    })
  }

  render() {
    return (
      <IonApp>
        <IonReactRouter history={history}>
          <IonTabs>
            <IonRouterOutlet animated={false}>
              <Route path="/" render={() => <Redirect to={`/tab1/${this.state.userId}`} />} exact={true} />
              <Route path="/tab1" component={MainTab} exact={true} />
              {/*<Route path="/tab1/:userId" component={MainTab} />*/}
              <Route path="/tab1/:userId" render={props => <MainTab updateUserId={this.updateUserId}/>}/>
              <Route path="/tab2/player" component={PlayerPage} />
              <Route path="/tab2" component={CustomizeTab} exact={true}/>
              <Route path="/tab3" component={RecordTab} exact={true}/>
              <Route path="/tab3/:userId/recording" component={RecordingPage} exact={true} />
              <Route path="/tab3/:userId/recorded" component={RecordTab} exact={true} />
              <Route path="/tab3/:userId" component={RecordTab} exact={true}/>
              <Route path="/tab3" component={RecordTab} exact={true}/>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href={`/tab1/${this.state.userId}`}>
                <IonIcon icon={homeSharp} />
                <IonLabel>홈</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href={`/tab2`}>
                <IonIcon icon={moonSharp} />
                <IonLabel>수면맞춤</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href={`/tab3/${this.state.userId}`}>
                <IonIcon icon={bookSharp} />
                <IonLabel>기록</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    );
  }
}

export default App;

// const App: React.FC = () => {
//   const [userId, setuserId] = useState<number>(1);
//   return (
//       <IonApp>
//         <IonReactRouter history={history}>
//           <IonTabs>
//             <IonRouterOutlet animated={false}>
//               <Route path="/tab1" component={MainTab} exact={true} />
//               <Route path="/tab1/:userId" component={MainTab} />
//               <Route path="/tab2" component={CustomizeTab} />
//               <Route path="/tab2/player" component={PlayerPage} />
//               <Route path="/tab3" component={RecordTab} exact={true}/>
//               <Route path="/tab3/:userId" component={RecordTab} />
//               <Route path="/tab3/recording/:userId" component={RecordingPage} />
//               <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
//             </IonRouterOutlet>
//             <IonTabBar slot="bottom">
//               <IonTabButton tab="tab1" href="/tab1/2">
//                 <IonIcon icon={homeSharp} />
//                 <IonLabel>홈</IonLabel>
//               </IonTabButton>
//               <IonTabButton tab="tab2" href="/tab2">
//                 <IonIcon icon={moonSharp} />
//                 <IonLabel>수면맞춤</IonLabel>
//               </IonTabButton>
//               <IonTabButton tab="tab3" href="/tab3/2">
//                 <IonIcon icon={bookSharp} />
//                 <IonLabel>기록</IonLabel>
//               </IonTabButton>
//             </IonTabBar>
//           </IonTabs>
//         </IonReactRouter>
//       </IonApp>
//     )
// };
//
// export default App;
