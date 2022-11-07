import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCheckbox,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonList,
  IonRadio,
} from '@ionic/react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Radio from '@mui/material/Radio';

//import ExploreContainer from '../components/ExploreContainer';
import './TimeOff.css';

const TimeOff: React.FC = () => {
  const data = [
    { label: 'Store#1 : Electoric Shoping and Repairing', year: 1994 },
    { label: 'Store#2 : Car Repairing and Services', year: 1972 },
    { label: 'Store#3 : Home furnitures and appliances', year: 1974 },
    { label: 'Store#4 : Computer hardware services', year: 2008 },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Time Off</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <ExploreContainer name="Time Off" /> */}
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
        <IonLabel className="m-2">MUI Dropdown</IonLabel>
        <Autocomplete
          disablePortal
          className="m-2"
          id="combo-box-demo"
          options={data}
          // sx={{ width: 400 }}
          renderInput={(params) => (
            <TextField {...params} label="Shop Address" />
          )}
        />

        <IonLabel className="m-2">Ionic Dropdown</IonLabel>
        <IonList className="m-2">
          <IonItem>
            <IonSelect interface="popover" placeholder="Shop Address">
              <IonSelectOption value="Store#1 : Electoric Shoping and Repairing">
                Store#1 : Electoric Shoping and Repairing
              </IonSelectOption>
              <IonSelectOption value="Store#2 : Car Repairing and Services">
                Store#2 : Car Repairing and Services
              </IonSelectOption>
              <IonSelectOption value="Store#3 : Home furnitures and appliances">
                Store#3 : Home furnitures and appliances
              </IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
        <IonList>
          <IonItem>
            <IonLabel>MUI Radio Button</IonLabel>
            <Radio
              value="radioA"
              inputProps={{
                'aria-label': 'Radio A',
              }}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Ionic Radio Button</IonLabel>
            <IonRadio slot="end" value="radio button"></IonRadio>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TimeOff;
