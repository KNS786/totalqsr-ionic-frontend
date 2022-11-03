import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './PunchInOut.css';

const PunchInOut: React.FC = () => {
  return (
    <IonPage>
            <IonHeader>
        <IonToolbar>
          <IonTitle>
            <strong>Hi Navani!!</strong>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Hi Navani!!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Hi Navani!!" />
      </IonContent>
    </IonPage>
  );
};

export default PunchInOut;
