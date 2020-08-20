import React, { createContext } from "react";
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
import { homeSharp } from "ionicons/icons";
import MainTab from "./pages/MainTab";
import CustomizeTab from "./pages/CustomizeTab";
import RecordTab from "./pages/RecordTab";

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

import history from "./history";
import Survey from "./pages/Survey";

export const Context = createContext({ asdfa: true });

const App: React.FC = () => {
  const asdfa = /\/survey/.test(window.location.href);
  const store = {
    asdfa: true,
  };
  return (
    <Context.Provider value={store}>
      <IonApp>
        <IonReactRouter history={history}>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/tab1" component={MainTab} exact={true} />
              <Route path="/tab2" component={CustomizeTab} exact={true} />
              <Route path="/tab3" component={RecordTab} />
              <Route path="/survey" component={Survey} />
              <Route
                path="/"
                render={() => <Redirect to="/tab1" />}
                exact={true}
              />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              {!asdfa && (
                <IonTabButton tab="tab1" href="/tab1">
                  <IonIcon icon={homeSharp} />
                  <IonLabel>메인화면</IonLabel>
                </IonTabButton>
              )}
              {!asdfa && (
                <IonTabButton tab="tab2" href="/tab2">
                  <IonIcon icon={homeSharp} />
                  <IonLabel>커스터마이징</IonLabel>
                </IonTabButton>
              )}
              {!asdfa && (
                <IonTabButton tab="tab3" href="/tab3">
                  <IonIcon icon={homeSharp} />
                  <IonLabel>수면기록</IonLabel>
                </IonTabButton>
              )}
              {asdfa && <IonTabButton href="/tab3">다음</IonTabButton>}
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    </Context.Provider>
  );
};

export default App;
