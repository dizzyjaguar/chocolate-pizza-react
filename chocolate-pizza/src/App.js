import React, { Component } from 'react';
import Header from './Header.js';
import Directions from './Directions.js'
import { paragraph1, paragraph2, paragraph3 } from './paragraphs.js'

import './App.css';
import { render } from '@testing-library/react';

export default class App extends Component {



render() {
  return (
    <div className="App">

    <Header logo={'/assets/logo.png'} fb={'/assets/fb-icon.png'} google={'/assets/gp-icon.png'} flic={'/assets/flic-icon.png'} insta={'/assets/insta-icon.png'} mail={'/assets/mail-icon.png'} twitter={'/assets/twit-icon.png'} rss={'/assets/rss-icon.png'} ></Header>
    
    <Directions mainPhoto={'/assets/choco-pizza.png'} directions1={paragraph1} directions2={paragraph2} directions3={paragraph3} ></Directions>
    
    </div>
  )
}
}