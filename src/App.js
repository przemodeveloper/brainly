import React, { Component } from 'react';

import './App.scss';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageForm from './Components/ImageForm/ImageForm';
import Ranking from './Components/Ranking/Ranking';
import Particles from 'react-particles-js';

const particlesOptions = {
  "particles": {
    "number": {
      "value":80,
      "density": {
        "enable": true,
        "value_area":800
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Ranking />
        <ImageForm />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
