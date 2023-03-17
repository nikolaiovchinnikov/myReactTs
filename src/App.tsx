import React ,{ useState } from 'react';
import AudioPlayer from './components/audioPlayers/Player';
// import ToDo from './components/ToDo/mainToDo';
import './App.scss';


const App = () => {
  
    return (
    <div className='container' >
      <AudioPlayer />
      {/* <ToDo/> */}
    </div>
    )
  }




export default App;
