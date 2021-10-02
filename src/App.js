import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <div className="IdCard Box">
        <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="" />
        <div class="IdCard Content">
          <IdCard
            lastName="Doe"
            firstName="John"
            gender="male"
            height={178}
            birth={new Date('1992-07-14')}
          />
        </div>
      </div>
      <div className="IdCard Box">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
        <div class="IdCard Content">
          <IdCard
            lastName="Delores"
            firstName="Obrien"
            gender="female"
            height={172}
            birth={new Date('1988-05-11')}
          />
        </div>
      </div>
      <h1>Greetings</h1>
      <div class="box">
      <Greetings 
        "Hallo" />
        </div>
    </div>
  );
}

export default App;
