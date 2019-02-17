import React, {Component} from "react";
import madrid from '../images/madrid.jpg'
import valencia from '../images/valencia.jpg'
import barcelona from '../images/barcelona.jpg'

class CitySelector extends Component {
  render() {
    return (
      <div>
        <select className="select" onChange={this.props.handleChange}>
          <option value={madrid}>Madrid</option>
          <option value={valencia}>Valencia</option>
          <option value={barcelona}>Barcelona</option>
        </select>
        <div>
          <img src={this.props.img} alt="selected-city" />
        </div>
      </div>
    );
  }
}

export default CitySelector;