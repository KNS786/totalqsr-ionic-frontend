import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

import React, { useState } from 'react';

import PickyourDateTime from '../components/calender/pickyourDateTime';

const ClockOut: React.FC = () => {
  const [selectedSegment, setselectedSegment] = useState('Pick your Time');

  const displayUserDatePicker = () => {
    if (selectedSegment === 'Pick your Time') {
      return (
        <div className="mx-auto container">
          <PickyourDateTime />
        </div>
      );
    } else if (selectedSegment === 'Now') {
      return (
        <div className="mx-auto container">
          <h1 className="text-2xl">08:11:45 PM</h1>
          <p>Mon,7 Nov 2022</p>
        </div>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <IonSegment
        value={selectedSegment}
        onClick={(e: any) => setselectedSegment(e.target.value)}
      >
        <IonSegmentButton value="Pick your Time">
          <IonLabel>Pick your Time</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="Now">
          <IonLabel>Now</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      {displayUserDatePicker()}
    </>
  );
};

export default ClockOut;
