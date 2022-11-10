import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { useAuth0 } from "@auth0/auth0-react";
import "./LoginPage.css";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogOutButton";
import Profile from "../components/Profile";

const LoginPage: React.FC = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return null;
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container">
          <Profile />
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
