import React, { useState } from 'react';


const App = () =>{
let time = new Date().toLocaleTimeString();

const [ctime ,setCtime] = useState(time);
const UpdateTime=()=>{
  time = new Date().toLocaleTimeString();
  setCtime(time);

};setInterval(UpdateTime, 1000);
  return (
    <>
    <div className="main">
      <h1>{ctime}</h1>
      <button className='button_update' onClick={UpdateTime}>Get Date</button>
    </div>
     
    </>
  );
  
}

export default App;
