import React, { useState } from "react";
import './App.css';
import DataTime from "./data";


const App = () => {


  const [arrayDate, setArrayDate] = useState(DataTime)
  function randId(min, max) {
    return Math.floor(Math.random(0, 3) * (max - min + 1)) + min;
  }
  const numberRund = () => {
    return randId(0, 3);
  }

  function refreshPage() {
    window.location.reload();
  }
  const autoRefresh = setTimeout(function () {
    refreshPage()
  }, 30000);


  return (
    <div className="App">
      <div className="buttons">
        <button onClick={refreshPage} >Refresh</button>
        <button onClick={() => autoRefresh} >Auto Refresh (30sec)</button>
        <button onClick={() => refreshPage} >Auto Refresh STOP</button>
      </div>
      <div className="item">
        <h2>{arrayDate[0].name}</h2>
        <input type="range" min="-7.4" max="10" value={arrayDate[`${numberRund()}`].time} />
        <output>{arrayDate[`${numberRund()}`].time}</output>
      </div>
      <div className="item">
        <h2>{arrayDate[1].name}</h2>
        <input type="range" min="-7.4" max="10" value={arrayDate[`${numberRund()}`].time} />
        <output>{arrayDate[`${numberRund()}`].time}</output>
      </div>
      <div className="item">
        <h2>{arrayDate[2].name}</h2>
        <input type="range" min="-7.4" max="10" value={arrayDate[`${numberRund()}`].time} />
        <output>{arrayDate[`${numberRund()}`].time}</output>
      </div>
      <div className="item">
        <h2>{arrayDate[3].name}</h2>
        <input type="range" min="-7.4" max="10" value={arrayDate[`${numberRund()}`].time} />
        <output>{arrayDate[`${numberRund()}`].time}</output>
      </div>



    </div>
  );
}

export default App;

