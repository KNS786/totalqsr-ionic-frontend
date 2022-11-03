import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './PunchInOut.css';

//Icons 
import Menu from '../components/Icons/Menu';
import ProfileIcon from '../components/Icons/Profile';
import NotificationIcon from '../components/Icons/Notification';

const PunchInOut: React.FC = () => {
  return (
    <IonPage>
            <IonHeader>
        <IonToolbar>
          <Menu/>
          <ProfileIcon/>
          <NotificationIcon/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Hi,Navani!!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Hi Navani!!" />
      </IonContent>
    </IonPage>
  );
};

export default PunchInOut;
