import React, { Component } from 'react';
import './App.css';
import movieData from './data.js';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  addMovies = () => {
    this.setState({movies; ...movieData.movies})
  }

  render() {
    return (
      <main className='App'>
        {/* <Form />
        <Movies /> */}


        
      </main>
    );
  }
}
export default App;
