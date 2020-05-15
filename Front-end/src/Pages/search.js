import React, { Component } from 'react';
import { IoMdShare } from 'react-icons/io';
import { Modal } from 'react-bootstrap';
import { FacebookShareButton, EmailShareButton, TwitterShareButton } from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import '../components/style.css'
import {url_1} from "../qwe"

class Share extends React.Component {
  render() {
    return <IoMdShare />
  }
}

class WithPromises extends Component {
  constructor(props) {
    super(props);
    console.log("from search ahi ave che", this)
    this.state = {
      customers: [],
      isOpen: false,
      isopen_ny: false,
      varrr: null,
      srcc: null
    };

  }
  openModal(id, e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log("haa ave che")
    this.setState({
      isOpen: {
        [id]: true,

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
  hooh = () =>
  {
    alert("hh")
  }


  componentDidMount() {

    console.log("gggg", this.props.location.search.substring(3))
    const query = this.props.location.search.substring(3)
    const key = this.props.source12

    if (key) {

      fetch(url_1+'/index1/search?q=' + query)
        .then(res => res.json())
        .then(customers => this.setState({ customers }, () => console.log('Search result guardian', customers)))
        .then(this.setState({ varrr: true }))


    }
    else {
      fetch(url_1+'/index1/search_ny?q=' + query)
        .then(res => res.json())
        .then(customers => this.setState({ customers }, () => console.log('Search result ny times', customers)))
        .then(this.setState({ varrr: false }))
    }


  }
  componentDidUpdate(prevProp, prevstate) {
    if (this.props.location.search.substring(3) !== prevProp.location.search.substring(3)) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
    {
      this.componentDidMount()
    }
  }


  render() {
    if (this.state.varrr)
      return (

        <div style={{ marginLeft: "30px" }}>
          <h3 style={{ marginBottom: "2px", marginTop: "2px" }}>Results</h3>
          {this.state.customers.map(customer =>

            <div style={{ display: "inline-block" }}>
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
                    <div class="col-2" style={{ paddingLeft: "10px" }}  ><TwitterShareButton
                      url={customer.webUrl}
                      hashtags={["CSCI_571_NewsApp"]}
                      title={null}
                      className="Demo__some-network__share-button"
                    >
                      <TwitterIcon size={55} round />
                    </TwitterShareButton></div>
                    <div class="col-4" style={{ paddingLeft: "18%" }} >
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



              <div onClick={() => this.props.history.push(`/details?id=${customer.id}`)} class="card" style={{ cursor: "pointer", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", transition: "0.3s", width: "20.5rem", marginBottom: "30px", marginTop: "7px", marginRight: "30px" }}>
                <div style={{ margin: "16px" }}>
                  <h6 class="card-title" style={{ fontSize: "16px", display: "inline" }}>{customer.webTitle}</h6>
                  <h5 onClick={(e) => this.openModal(customer.id, e)} style={{ display: "inline", cursor: "pointer" }}><Share /></h5>
                  <div className="col-md-auto card" style={{ padding: "3px" }}>
                    { //Check if message failed
                      (customer.blocks.main == undefined || customer.blocks.main.elements[0].assets[0] == undefined)
                        ? <img class="card-img-top" style={{ objectFit: "cover", padding: "0px" }} src="https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png" alt="Card image cap" />
                        : <img class="card-img-top" style={{ objectFit: "cover", padding: "0px" }} src={customer.blocks.main.elements[0].assets.slice(-1)[0].file} alt="Card image cap" />
                    }
                  </div>
                  <div class="card-body" style={{ padding: "0px", marginTop: "15px" }}>
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
              </div>
            </div>

          )
          }
        </div>
      );
    else {
      var pls = false
      var ii = 0

      return (

        
        <div style={{ marginLeft: "30px" }}>
          <h3 style={{ marginBottom: "2px", marginTop: "2px" }}>Results</h3>
          {this.state.customers.map(customer =>

            <div style={{ display: "inline-block" }}>
              <Modal
                size="md"
                show={this.state.isOpen[customer.web_url]}
                onHide={() => this.setState({ isOpen: { [customer.web_url]: false } })}
                area-labelledby="example-modal-sizes-title-sm"
              >
                <Modal.Header closeButton>
                  <Modal.Title style={{ fontSize: "20px" }}>
                    {customer.headline.main}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h5 style={{ fontSize: "20px", textAlign: "center" }}>Share via</h5>

                  <div class="row">
                    <div class="col-1">
                    </div>
                    <div class="col-4"  >
                      <FacebookShareButton
                        url={customer.web_url}
                        hashtag="#CSCI_571_NewsApp"
                        className="Demo__some-network__share-button"
                      >
                        <FacebookIcon size={55} round />
                      </FacebookShareButton>
                    </div>
                    <div class="col-2" style={{ paddingLeft: "10px" }}  ><TwitterShareButton
                      url={customer.web_url}
                      hashtags={["CSCI_571_NewsApp"]}
                      title={null}
                      className="Demo__some-network__share-button"
                    >
                      <TwitterIcon size={55} round />
                    </TwitterShareButton></div>
                    <div class="col-4" style={{ paddingLeft: "18%" }} >
                      <EmailShareButton
                        url={customer.web_url}
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



              <div onClick={() => this.props.history.push(`/details?id=${customer.web_url}`)} class="card" style={{ cursor: "pointer",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", transition: "0.3s", width: "20.5rem", marginBottom: "30px", marginTop: "7px", marginRight: "30px" }}>
                <div style={{ margin: "16px" }}>
                  <h6 class="card-title" style={{ fontSize: "16px", display: "inline" }}>{customer.headline.main}</h6>
                  <h5 onClick={(e) => this.openModal(customer.web_url, e)} style={{ display: "inline", cursor: "pointer" }}><Share /></h5>
                  <div className="col-md-auto card" style={{ padding: "3px" }}>

                  {(() => {
                     
                     if (customer.multimedia == undefined || customer.multimedia[0] == [] || customer.multimedia[0] == undefined || customer.multimedia[0].url == undefined ) {
                       
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

                    
 
                    {
                      (customer.multimedia[0] == [] || customer.multimedia[0] == undefined || pls == false )
                        ? <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg" />
                        : <img class="card-img-top" src={`https://www.nytimes.com/${customer.multimedia[ii].url}`} alt="Card image cap" />
                    }
                  </div>
                  <div class="card-body" style={{ padding: "0px", marginTop: "15px" }}>
                    <h6 className="card-text" style={{ display: "inline", fontStyle: "italic" }}>{customer.pub_date.substring(0, 10)}</h6>
                    {(() => {
                      switch (customer.news_desk) {
                        case "Sports": return <h6 style={{ display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(246,194,68)", color: "black", padding: "3px 7px", fontSize: "14px", fontWeight: "700" }}>SPORTS</h6>;
                        case "Business": return <h6 style={{ display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(70,150,236)", color: "white", padding: "3px 7px", fontSize: "14px", fontWeight: "700" }}>BUSINESS</h6>;
                        case "Politics": return <h6 style={{ display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(65,148,136)", color: "white", padding: "3px 7px", fontSize: "14px", fontWeight: "700" }}>POLITICS</h6>;
                        case "World": return <h6 style={{ display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(124,78,255)", color: "white", padding: "3px 7px", fontSize: "14px", fontWeight: "700" }}>WORLD</h6>;
                        case "Technology": return <h6 style={{ display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(206,220,57)", color: "black", padding: "3px 7px", fontSize: "14px", fontWeight: "700" }}>TECHNOLOGY</h6>
                        case "": return null
                        default: return <h6 style={{ display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(110,117,124)", color: "White", padding: "3px 7px", fontSize: "14px", fontWeight: "700" }}>{customer.news_desk.toUpperCase()}</h6>;
                      }
                    })()}
                    
                  </div>
                </div>
              </div>
            </div>

          )
          }
        </div>
      );
    }
  }
}
export default WithPromises;

