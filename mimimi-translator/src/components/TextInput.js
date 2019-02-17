import React, {Component} from "react";

class TextInput extends Component {
  render() {
    return (
      <div className="text">
        <textarea onChange={this.props.handleChange}>

        </textarea>
      </div>
    );
  }
}

export default TextInput;