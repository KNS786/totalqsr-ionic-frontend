// user allowed to select Range Date restrication
import React from 'react';

import { IonDatetime, IonList, IonItem } from '@ionic/react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const pickYourDateTime: React.FC = () => {
  return (
    <div className="mb-8 flex flex-col justify-around items-center mt-2 text-xs">
      <h1 className="text-2xl">Date Picker</h1>
      <IonDatetime
        className="bg-transparent"
        presentation="date"
        preferWheel={true}
      ></IonDatetime>
      <h1 className="text-2xl">Time Picker</h1>
      <IonDatetime
        color={'white'}
        presentation="time"
        preferWheel={true}
      ></IonDatetime>
    </div>
  );
};
export default pickYourDateTime;
