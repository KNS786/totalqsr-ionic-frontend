import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCheckbox,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import ExploreContainer from '../components/ExploreContainer';
import './TimeOff.css';

const TimeOff: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Time Off</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer name="Time Off" />
        <FormGroup className="form-group">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="This is MUI checkbox"
          />
          <FormControlLabel
            disabled
            control={<Checkbox />}
            label="Disabled MUI Checkbox"
          />
        </FormGroup>
        <IonList class="ion-align-items-center">
          <IonItem>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>I am Ionic Checkbox</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>Observe how I change based on device</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TimeOff;
