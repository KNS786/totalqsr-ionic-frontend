// user allowed to select Range Date restrication
import React from 'react';

import { IonDatetime , IonList ,IonItem } from '@ionic/react';
const pickYourDateTime:React.FC = () => {
  return (
    <IonDatetime
    presentation="month-year"
      value="2022-04-21T00:00:00"
      min="2022-03-01T00:00:00"
      max="2022-05-31T23:59:59"
    ></IonDatetime>

  );
}
export default pickYourDateTime;