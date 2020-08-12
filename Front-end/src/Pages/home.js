import React, { Component, useState } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Selectbox1 from '../components/selectbox';
import Switch from '../components/switch'
import { FaRegBookmark } from 'react-icons/fa';
import { IoMdShare } from 'react-icons/io';
import { FacebookShareButton, EmailShareButton, TwitterShareButton } from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import '../components/style.css';
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";
import {url_1} from "../qwe"



const override = css`
  display: block;
  border-color: red;
  position: fixed;
  top: 50%;
  left: 50%;
`;
class Question extends React.Component {
  render() {
    return <h4 style={{ color: "white", marginRight: "15px" }}><FaRegBookmark /></h4>
  }
}
class Share extends React.Component {
  render() {
    return <IoMdShare />
  }
}
class Customers extends Component {

  constructor(props) {

    super(props);
    console.log("from homeeeeeeeeeeeeeeeee", this.props)
    this.state = {
      customers: [],
      customers1: [],
      isOpen: false,
      isopen_ny: false,
      check: true,

    };

  }
  openModal(id, e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log("haa ave che")
    this.setState({
      isOpen: {
        [id]: true
      }
    });

  }
  openModal_ny(id, e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log("haa ave che")
    this.setState({
      isOpen: {
        [id]: true
      }
    });

  }

  onSubmit = (id_pass) => {
    this.props.history.push('/details?id=' + id_pass);
  }

  componentDidMount() {
    console.log("ahi to ave che sache k ma")
    console.log("from home", this.props.source12)
    if (this.props.source12) {
      console.log("TO BI SU CHE")
      fetch(url_1+'/index1/home')
        .then(res => res.json())
        .then(customers => this.setState({ customers }, () => console.log('Customers fetched...', customers)))
        .then(setTimeout(
          function () {
            this.setState({ check: false });
          }
            .bind(this),
          2500
        ))

    }
    else {
      fetch(url_1+'/index1/nyhome')
        .then(res => res.json())
        .then(customers1 => this.setState({ customers1 }, () => console.log('Customers_ny fetched...', customers1)))
        .then(setTimeout(
          function () {
            this.setState({ check: false });
          }
            .bind(this),
          2500
        ))

    }

  }
  componentDidUpdate(prevProp, prevstate) {
    if (this.props.source12 !== prevProp.source12) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
    {
      this.setState({ check: true })
      this.componentDidMount()

    }
  }






  render() {
    // alert("Search box may not be giving you suggestions as i had used Microsoft Bing API for Auto search feature which is only free for 1 month :(")
    if (this.state.check) {
      return (
        <div className="sweet-loading">
          <BounceLoader
            css={override}
            size={45}
            color={"#123abc"}
            loading={true}
          />
          <h4 className="center">Loading</h4>
        </div>
      );
    }

    if (this.props.source12) {
     
      return (

        <div>


          {this.state.customers.map(customer =>

            <>

              <Modal
                size="md"
                show={this.state.isOpen[customer.id]}
                onHide={() => this.setState({ isOpen: { [customer.id]: false } })}
                area-labelledby="example-modal-sizes-title-sm"
              >
                <Modal.Header closeButton>
                  <Modal.Title style={{ fontSize: "20px" }}>
                    {customer.webTitle}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h5 style={{ fontSize: "20px", textAlign: "center" }}>Share via</h5>
                  <div class="row">
                    <div class="col-1">
                    </div>
                    <div class="col-4"  >
                      <FacebookShareButton
                        url={customer.webUrl}
                        hashtag="#CSCI_571_NewsApp"
                        className="Demo__some-network__share-button"
                      >
                        <FacebookIcon size={55} round />
                      </FacebookShareButton>
                    </div>
                    <div class="col-2" style={{paddingLeft:"10px"}}  ><TwitterShareButton
                      url={customer.webUrl}
                      hashtags={["CSCI_571_NewsApp"]}
                      title={null}
                      className="Demo__some-network__share-button"
                    >
                      <TwitterIcon size={55} round />
                    </TwitterShareButton></div>
                    <div class="col-4" style={{paddingLeft:"18%"}} >
                      <EmailShareButton 
                      url={customer.webUrl}
                      subject={"#CSCI_571_NewsApp"}
                      
                      className="Demo__some-network__share-button"
                      
                    >
                      <EmailIcon size={55} round />
                    </EmailShareButton></div>
                    <div class="col-1">
                    </div>
                  </div>
                </Modal.Body>

              </Modal>


            
              <div onClick={() => this.props.history.push(`/details?id=${customer.id}`)} className="row" style={{padding:"18px",borderRadius:"4px",border:"1px solid lightgrey",margin: "26px 29px" , boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", cursor: "pointer", transition: "0.3s" }} >
                  <div className="col-md-3 card" style={{padding:"0px"}}>
                    { 
                      (customer.blocks.main == undefined || customer.blocks.main.elements[0].assets[0] == undefined)
                        ? <img style={{  padding: "4px" }} className="card-img" src="https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png" />
                        : <img style={{  padding: "4px" }} className="card-img" src={customer.blocks.main.elements[0].assets.slice(-1)[0].file} />
                    }
                  </div>
                  <div className="col-md-9">
                      <h5 className="card-title" style={{ display: "inline" }}>{customer.webTitle}</h5>
                      <h5 onClick={(e) => this.openModal(customer.id, e)} style={{ display: "inline", cursor: "pointer" }}><Share /></h5>
                      <p style={{ marginTop: "5px", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: "3", WebkitBoxOrient: "vertical" }} >{customer.blocks.body[0].bodyTextSummary}</p>
                      <h6 className="card-text" style={{ display: "inline", fontStyle: "italic" }}>{customer.webPublicationDate.substring(0, 10)}</h6>

                      {(() => {
                        switch (customer.sectionId) {
                          case "sport": return <h6 style={{ display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(246,194,68)", color: "black", padding: "3px 7px", fontSize: "14px", fontWeight: "700" }}>SPORTS</h6>;
                          case "business": return <h6 style={{ display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(70,150,236)", color: "white", padding: "3px 7px", fontSize: "14px", fontWeight: "700" }}>BUSINESS</h6>;
                          case "politics": return <h6 style={{ display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(65,148,136)", color: "white", padding: "3px 7px", fontSize: "14px", fontWeight: "700" }}>POLITICS</h6>;
                          case "world": return <h6 style={{ display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(124,78,255)", color: "white", padding: "3px 7px", fontSize: "14px", fontWeight: "700" }}>WORLD</h6>;
                          case "technology": return <h6 style={{ display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(206,220,57)", color: "black", padding: "3px 7px", fontSize: "14px", fontWeight: "700" }}>TECHNOLOGY</h6>
                          default: return <h6 style={{ display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(110,117,124)", color: "White", padding: "3px 7px", fontSize: "14px", fontWeight: "700" }}>{customer.sectionId.toUpperCase()}</h6>;
                        }
                      })()}
                </div>
              </div>
             
            </>
          )
          }

        </div>
      );

    }
    else {

      var pls = false
      var ii = 0
      if (this.state.check) {
        return (
          <div className="sweet-loading">
            <BounceLoader
              css={override}
              size={45}
              color={"#123abc"}
              loading={true}
            />
            <h4 className="center">Loading</h4>
          </div>
        );
      }
      return (<div>

        {this.state.customers1.slice(0, 10).map(customer =>

          <>
            <Modal
              size="md"
              show={this.state.isOpen[customer.url]}
              onHide={() => this.setState({ isOpen: { [customer.url]: false } })}
              area-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title style={{ fontSize: "20px" }}>
                  {customer.title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h5 style={{ fontSize: "20px", textAlign: "center" }}>Share via</h5>
               
                <div class="row">
                    <div class="col-1">
                    </div>
                    <div class="col-4"  >
                      <FacebookShareButton
                        url={customer.url}
                        hashtag="#CSCI_571_NewsApp"
                        className="Demo__some-network__share-button"
                      >
                        <FacebookIcon size={55} round />
                      </FacebookShareButton>
                    </div>
                    <div class="col-2" style={{paddingLeft:"10px"}}  ><TwitterShareButton
                      url={customer.url}
                      hashtags={["CSCI_571_NewsApp"]}
                      title={null}
                      className="Demo__some-network__share-button"
                    >
                      <TwitterIcon size={55} round />
                    </TwitterShareButton></div>
                    <div class="col-4" style={{paddingLeft:"18%"}} >
                      <EmailShareButton 
                      url={customer.url}
                      subject={"#CSCI_571_NewsApp"}
                     
                      className="Demo__some-network__share-button"
                      
                    >
                      <EmailIcon size={55} round />
                    </EmailShareButton></div>
                    <div class="col-1">
                    </div>
                  </div>
              </Modal.Body>

            </Modal>



            <div onClick={() => this.props.history.push(`/details?id=${customer.url}`)} className="row" style={{padding:"18px",borderRadius:"4px",border:"1px solid lightgrey",margin: "26px 29px" , boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", cursor: "pointer", transition: "0.3s" }} >
                  <div className="col-md-3 card" style={{padding:"0px"}}>
                  {(() => {
                     
                     if (customer.multimedia == undefined || customer.multimedia[0].url == undefined ) {
                       
                       }
                       else
                       {
                        var qq = customer.multimedia
                        for (var i = 0; i < qq.length; i++) {
                          var flag = false
                          pls = false
                          ii = i
                          if (qq[i].width > 2000) {
                            flag = true
                            pls = true
                            ii = i
                            break
                          }
                       }
                    
                       if (flag == true) { console.log() }
                       else { i = 0 }
                     }
   
                   }
                   )()}

                  { //Check if message failed
                    (customer.multimedia == undefined || customer.multimedia[0].url == undefined || pls == false)
                      ? <img style={{  padding: "4px" }} className="card-img" src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg" />
                      : <img style={{  padding: "4px" }} className="card-img" src={customer.multimedia[ii].url} />
                  }

                  </div>
                  <div className="col-md-9">
                      <h5 className="card-title" style={{ display: "inline" }}>{customer.title}</h5>
                      <h5 onClick={(e) => this.openModal_ny(customer.url, e)} style={{ display: "inline", cursor: "pointer" }}><Share /></h5>
                      <p style={{ marginTop: "5px", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: "3", WebkitBoxOrient: "vertical" }} >{customer.abstract}</p>
                      <h6 className="card-text" style={{ display: "inline", fontStyle: "italic" }}>{customer.published_date.substring(0, 10)}</h6>

                      {(() => {
                      switch (customer.section) {
                        case "sports": return <h6 style={{ display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(246,194,68)", color: "black", padding: "3px 7px", fontSize: "14px", fontWeight: "700" }}>SPORTS</h6>;
                        case "business": return <h6 style={{ display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(70,150,236)", color: "white", padding: "3px 7px", fontSize: "14px", fontWeight: "700" }}>BUSINESS</h6>;
                        case "politics": return <h6 style={{ display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(65,148,136)", color: "white", padding: "3px 7px", fontSize: "14px", fontWeight: "700" }}>POLITICS</h6>;
                        case "world": return <h6 style={{ display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(124,78,255)", color: "white", padding: "3px 7px", fontSize: "14px", fontWeight: "700" }}>WORLD</h6>;
                        case "technology": return <h6 style={{ display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(206,220,57)", color: "black", padding: "3px 7px", fontSize: "14px", fontWeight: "700" }}>TECHNOLOGY</h6>
                      default: return <h6 style={{ display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(110,117,124)", color: "White", padding: "3px 7px", fontSize: "14px", fontWeight: "700" }}>{customer.section.toUpperCase()}</h6>;
                      }
                    })()}
                </div>
              </div>


          </>
        )
        }

      </div>);
    }

  }
}

export default Customers;