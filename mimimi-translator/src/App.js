import React, { Component } from 'react';
import MIMIMITranslator from './components/MIMIMITranslator';
import TextInput from './components/TextInput';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text:''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
      this.setState({
        text: e.currentTarget.value.replace(/[aeiou]/gi, 'i')
      })
  }

  render() {
    return (
      <div className="App">
        <TextInput handleChange={this.handleChange} text={this.state.text}/>
        <MIMIMITranslator text={this.state.text}/>
      </div>
    );
  }
}

export default App;
