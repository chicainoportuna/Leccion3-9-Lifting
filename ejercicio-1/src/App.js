import React, { Component } from 'react';
import CitySelector from './components/CitySelector';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.forceUpdate();
      this.setState({
        src: event.currentTarget.value
      })
  }

  render() {
    return (
      <div className="App">
        <CitySelector handleChange={this.handleChange} img={this.state.src}/>
      </div>
    );
  }
}

export default App;
