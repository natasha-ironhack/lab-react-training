import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';

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
      <div className="Greeting Box">
        <Greetings lang="de">Ludwig</Greetings>
      </div>
      <div className="Greeting Box">
        <Greetings lang="fr">François</Greetings>
      </div>
      <h1>Random</h1>
      <div className="Random Box">
        <Random min={1} max={6} />
      </div>
      <div className="Random Box">
        <Random min={1} max={100} />
      </div>
      <h1>LikeButton</h1>
      <div className="LikeButton Box">
        <LikeButton />
      </div>
      <h1>Clickable Picture</h1>
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
    </div>
  );
}

export default App;
