import React, {Component} from "react";

class CategoryButton extends Component {
  render() {
    return (
      <button onClick={this.props.handleClick}>{this.props.category}</button>
    );
  }
}

export default CategoryButton;