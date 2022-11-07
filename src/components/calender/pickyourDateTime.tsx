// user allowed to select Range Date restrication
import React from 'react';

import { IonDatetime , IonList ,IonItem } from '@ionic/react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const pickYourDateTime:React.FC = () => {
  return (
    <div className="mb-8 flex items-stretch">
      <div className="grid grid-cols-2 gap-2">
        <IonDatetime presentation="date" preferWheel={true}></IonDatetime>
      </div>
      <div className="flex items-stretch">
        <IonDatetime presentation="time" preferWheel={true}></IonDatetime>
      </div>
    </div>
  );
}
export default pickYourDateTime;