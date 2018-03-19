import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';
import 'tachyons';

const app = new Clarifai.App({
  apiKey: 'b7bcf446386c49fd987f4ab16d6aea02'
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models
    .predict(
    Clarifai.COLOR_MODEL,
      // URL
      // "b7bcf446386c49fd987f4ab16d6aea02",
      "https://samples.clarifai.com/metro-north.jpg"
    )
    .then(function(response) {
      console.log(response);
      },
      function(err){}
    );
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/*
        <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
