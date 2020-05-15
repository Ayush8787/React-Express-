import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import Selectbox1 from '../components/selectbox';
import Switch from '../components/switch'
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import {withRouter} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import './style.css'

import {url_1} from "../qwe"

class Question extends React.Component {
 
  
  render() {
    return <h4  style={{ color: "white", marginRight: "15px" }}><FaRegBookmark /></h4>
  }
}


function navigation(props) {
  
  const divstyle = {
    marginTop: "7px",
    marginRight: "11px",
    marginLeft: "3px",
    color: "white"
  }

  const changeit = (source) => {
    var pass = source
    console.log("bapre baaappppppppppppppppppppp",source)
    props.handler1(source)
    console.log("from navbar ",props)
  }
 
  console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhuuuuuuuuuuuuuuuuuuuuuuuuuuu",props.location.pathname)
  
  
    
  if(props.location.pathname == "/details" || props.location.pathname == "/search" || props.location.pathname == '/favourite')
  {
    var valuee = "none";
    
  }
  else{
    var valuee = "";
  }
  
  if(props.location.pathname == "/")
  {
   var flag_h = true
  }
  else if(props.location.pathname == "/world")
  {
   var flag_w = true
  }
  else if(props.location.pathname == "/business")
  {
   var flag_b = true
  }
  else if(props.location.pathname == "/sports")
  {
   var flag_s = true
  }
  else if(props.location.pathname == "/technology")
  {
   var flag_t = true
  }
  else if(props.location.pathname == "/politics")
  {
   var flag_p = true
  }


  return (
    
    <div>

      <div>
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "blue", minWidth: "382.4px" }} variant="dark">
          <div style={{ width: "280px" }}>
            <Selectbox1 />
          </div>
          <ReactTooltip/>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="mr-auto" id="id-given">
              {/* <NavLink as={Link} to="/" exact style={{color:"yellow"}} activeStyle={{color:"white",textDecoration:"none"}}>Home</NavLink>
              <NavLink to="/world" exact activeStyle={{color:"white",textDecoration:"none"}}>World</NavLink>
              <NavLink to="/sports" exact activeStyle={{color:"white",textDecoration:"none"}}>Business</NavLink>
              <NavLink to="/technology"exact activeStyle={{color:"white",textDecoration:"none"}}>technology</NavLink> */}
              <Nav.Link as={Link} to="/" exact style={{ color: flag_h ? 'white' : '', }} >Home</Nav.Link>
              <Nav.Link as={Link} style={{ color: flag_w ? 'white' : '', }} to="/world" ClassName="ii" >World</Nav.Link>
              <Nav.Link as={Link} style={{ color: flag_p ? 'white' : '', }} to="/politics" >Politics</Nav.Link>
              <Nav.Link as={Link} style={{ color: flag_b ? 'white' : '', }} to="/business" >Business</Nav.Link>
              <Nav.Link as={Link} style={{ color: flag_t ? 'white' : '', }} to="/technology" >Technology</Nav.Link>
              <Nav.Link as={Link} style={{ color: flag_s ? 'white' : '', }} to="/sports" >Sports</Nav.Link>
            </Nav>
            <Nav>

              {
                (props.location.pathname == "/favourite")
                  ? <h4 style={{ cursor:"pointer", color: "white", marginRight: "15px" }}><FaBookmark data-effect="solid" data-place="bottom"  data-tip="Bookmark"/></h4>
                  : <h4  onClick={()=>{props.history.push('/favourite')}} style={{cursor:"pointer", color: "white", marginRight: "15px" }}><FaRegBookmark data-effect="solid" data-place="bottom"  data-tip="Bookmark" /></h4>
              }
            
            </Nav>
             <Nav style={{display:valuee}}>
              <div style={divstyle}>NYTimes</div>
              <Switch handler={changeit} />
              <div style={divstyle}>Guardian</div>
            </Nav> 
          </Navbar.Collapse>
        </Navbar>

      </div>


    </div>
  )
}
export default withRouter(navigation);