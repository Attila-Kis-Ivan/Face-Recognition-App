import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import ParticlesBg from 'particles-bg'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }

  onInputchange= (event) => {
    console.log(event.target.value);
  } 

  onButtonSubmit = () => {
    console.log('click')
  }

  render() {
  return (
    <div className="App">
    <ParticlesBg color="#ffffff" type="cobweb" num={200} bg={true} />
      <Navigation />
      <Logo/>
      <Rank/>
     <ImageLinkForm 
       onInputchange={this.onInputchange} 
       onButtonSubmit={this.onButtonSubmit}
      />

       {/* <FaceRrcognition/>*/}
    </div>
   );
 }
}

export default App;
