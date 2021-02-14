import React, { Component } from 'react';

import './App.scss';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageForm from './Components/ImageForm/ImageForm';
import Ranking from './Components/Ranking/Ranking';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
  apiKey: 'd978d67cfc764b1d9b375d8f7ba4b63b'
 });

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

  state = {
    imageInput: '',
    imageURL: '',
    box: {},
  }

  calculateFaceLocation = (data) => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const inputImage = document.getElementById('faceimage');
    const width = Number(inputImage.width);
    const height = Number(inputImage.height);

    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - (face.right_col * width),
      bottomRow: height - (face.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({
      imageInput: event.target.value
    })
  };

  onSubmitImage = () => {
    if(this.state.imageInput !== '') {
      this.setState({imageURL: this.state.imageInput})
      app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.imageInput)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(error => console.log(error.message));
    }
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Ranking />
        <ImageForm onInputChange={this.onInputChange} onSubmitImage={this.onSubmitImage}/>
        <FaceRecognition imageURL={this.state.imageURL} box={this.state.box}/>
      </div>
    );
  }
}

export default App;
