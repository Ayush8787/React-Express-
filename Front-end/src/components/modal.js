import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar ,NavLink,activeClassName, Button , Form, FormControl,Modal } from 'react-bootstrap';
import Selectbox1 from '../components/selectbox';
import Switch from '../components/switch'
import { FaRegBookmark } from 'react-icons/fa';
import { IoMdShare } from 'react-icons/io';
import './style.css'

import {url_1} from "../qwe"

class addmodal extends Component
{
  constructor(props){
    super(props);
    

  }
  render()
  {
   
    return(
      <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {this.props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisi
        </p>
      </Modal.Body>
    
    </Modal>
  );

    
  }
}
export default addmodal