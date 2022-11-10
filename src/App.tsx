import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';

import { Browser } from '@capacitor/browser';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';


import PunchInOut from './pages/PunchInOut';
import TimeOff from './pages/TimeOff';
import TimeCard from './pages/TimeCard';
import LoginPage from './pages/LoginPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* import mui components */
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import EventIcon from '@mui/icons-material/Event';
import { App as CapApp } from '@capacitor/app';

setupIonicReact({
  mode: "md"
});

const App: React.FC = () => {
  const { handleRedirectCallback } = useAuth0();
  useEffect(() => {
    // Handle the 'appUrlOpen' event and call `handleRedirectCallback`
    CapApp.addListener('appUrlOpen', async ({ url }) => {
      if (url.includes('state') && (url.includes('code') || url.includes('error'))) {
        await handleRedirectCallback(url);
      }
      // No-op on Android
      await Browser.close();
    });
  }, [handleRedirectCallback]);
  return(
    <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/punchInOut">
            <PunchInOut />
          </Route>
          <Route exact path="/timeoff">
            <TimeOff />
          </Route>
          <Route path="/timecard">
            <TimeCard />
          </Route>
          <Route exact path="/">
            <Redirect to="/login"/>
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="punchInOut" href="/punchInOut">
            <AccessTimeIcon/>
            <IonLabel>Clock</IonLabel>
          </IonTabButton>
          <IonTabButton tab="timeOff" href="/timeoff">
            <EventIcon/>
            <IonLabel>Time Off</IonLabel>
          </IonTabButton>
          <IonTabButton tab="timeCard" href="/timecard">
          <PendingActionsIcon/>
            <IonLabel>Time Card</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  )
}

export default App;
