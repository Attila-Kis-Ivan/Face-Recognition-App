import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import ParticlesBg from 'particles-bg'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

import './App.css';

function App() {
  return (
    <div className="App">
    <ParticlesBg color="#ffffff" type="cobweb" num={200} bg={true} />
      <Navigation />
      <Logo/>
      <Rank/>
     <ImageLinkForm/>

       {/* <FaceRrcognition/>*/}
    </div>
  );
}

export default App;
