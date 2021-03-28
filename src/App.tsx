import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [dateTime, setDateTime] = useState(new Date());

  setInterval(()=>{setDateTime(new Date())
}, 1000);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Lezhi. Current Time is {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
        </p>
      </header>
    </div>
  );
}

export default App;
