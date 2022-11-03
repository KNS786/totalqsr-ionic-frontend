import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './TimeCard.css';

const TimeCard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Time Card</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Time Card</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Time Card" />
      </IonContent>
    </IonPage>
  );
};

export default TimeCard;
