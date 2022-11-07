import {
  IonLabel,
  IonSegment,
  IonSegmentButton
} from '@ionic/react';

import React,{useState,useEffect} from 'react';

import PickyourDateTime from "../components/calender/pickyourDateTime";

const ClockOut:React.FC = () => {
  const [pickYourTime,setPickYourTime] = useState(true);
  const [nowCurrentTime,setNowCurrentTime] = useState(false);

  const dateTimePickHandler = (event:any) =>{
    setPickYourTime(true);
    setNowCurrentTime(false);
  }

  const currentTimeHandler = (event:any) => {
    setNowCurrentTime(true);
    setPickYourTime(false);
  }

  return (
        <>
        <IonSegment value="Pick your Time">
        <IonSegmentButton value="Pick your Time" onClick = {dateTimePickHandler}>
          <IonLabel>Pick your Time</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="Now" onClick = {(event:any)=>currentTimeHandler(event)}>
          <IonLabel>Now</IonLabel>
        </IonSegmentButton>
       </IonSegment>
       {
        pickYourTime ? <PickyourDateTime/> :nowCurrentTime ? <p>new Date</p> : <></>
       }
      </>
  )
}

export default ClockOut;