import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './PunchInOut.css';

//Icons
import Menu from '../components/Icons/Menu';
import ProfileIcon from '../components/Icons/Profile';
import NotificationIcon from '../components/Icons/Notification';

//screens
import ClockOut from '../screens/clockOut';

const PunchInOut: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="flex">
            <Menu />
            <ProfileIcon />
            <div className="flex flex-1 justify-end items-center">
              <NotificationIcon />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer name="Hi Jessica!!" />
        <ClockOut/>
      </IonContent>
    </IonPage>
  );
};

export default PunchInOut;
