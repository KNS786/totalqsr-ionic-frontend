import {
  IonLabel,
  IonSegment,
  IonSegmentButton
} from '@ionic/react';

import React,{useState} from 'react';

import PickyourDateTime from "../components/calender/pickyourDateTime";

const ClockOut:React.FC = () => {
  
  const [clicked,setClicked] = useState("");
  
  const displayUserDatePicker = () =>{
    if(clicked === "Pick your Time"){
      return (
        <PickyourDateTime/>
      )
    }
    else if(clicked === "Now"){
      return (
        <p> new Date </p>
      )
    }
    else{
      return <></>
    }

  }

  return (
        <>
        <IonSegment value="Pick your Time" onClick = {(e:any)=>setClicked(e.target.value)}>
        <IonSegmentButton value="Pick your Time">
          <IonLabel>Pick your Time</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="Now" >
          <IonLabel>Now</IonLabel>
        </IonSegmentButton>
       </IonSegment>
       {
        displayUserDatePicker()
       }
      </>
  )
}

export default ClockOut;