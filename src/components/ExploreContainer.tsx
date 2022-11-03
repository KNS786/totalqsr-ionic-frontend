import './ExploreContainer.css';
import React,{useState,useEffect} from 'react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [punchIn,setPunchIn] = useState(false);
  const [punchInBtn,setPunchInBtn] = useState(true);
  const [clockOut,setClockOut] = useState(true);
  
  const clickPunchIn = (event:any) => {
    setPunchInBtn(false);
  } 

  const clickPunchOut = (event:any) => {
    setClockOut(false);
    setPunchIn(true);
  }

  const showUserActions = () => {
    if(punchInBtn){
      return (
        <div className="clockIn">
          <button onClick = {clickPunchIn}>Clock In</button>
        </div>
      )
    }
    else{
      return(
        <div>
          <button onClick={clickPunchOut}> Click Out</button>
        </div>
      )
    }

  }


  return (
    <div className="container">
      <strong>{name}</strong>
    </div>
  );
};

export default ExploreContainer;
