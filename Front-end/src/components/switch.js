import React, { Component } from "react";
import Switch from "react-switch";
import { Nav, Navbar ,NavLink,activeClassName, Button , Form, FormControl } from 'react-bootstrap';
import {url_1} from "../qwe"
class SwitchExample extends Component {
  constructor() {
    super();
    if (localStorage.getItem('switch') == null)
    {
      alert("ahi avani nobat j nai ave laaaaaaaaaaaaaaaaaaa")
      var works = [];
      works.push({
        "id":true
      })
      localStorage.setItem('switch', JSON.stringify(works));
     
    }
    var list = JSON.parse(localStorage.getItem('switch'));
    this.state = { checked: list[0].id };
    this.handleChange = this.handleChange.bind(this);
    
    
  }
 
  handleChange(checked) {
    var works = [];
      works.push({
        "id":checked
      })
    localStorage.setItem('switch', JSON.stringify(works));
    console.log("ohoooooo",checked)
    this.setState({ checked });
    this.props.handler(checked)
    
  }
 
  render() {
    return (
      
      <label style={{marginBottom:"0px",marginTop:"5px"}} htmlFor="material-switch">
      <Switch
        checked={this.state.checked}
        onChange={this.handleChange}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
        className="react-switch"
        id="material-switch"
      />
    </label>
    );
  }
}

export default SwitchExample