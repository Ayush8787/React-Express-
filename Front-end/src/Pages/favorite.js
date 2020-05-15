import React, { Component } from 'react';
import { IoMdShare } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { Modal } from 'react-bootstrap';
import { FacebookShareButton, EmailShareButton, TwitterShareButton } from "react-share";
import {
    EmailIcon,
    FacebookIcon,
    TwitterIcon,
} from "react-share";
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../components/style.css';

import {url_1} from "../qwe"
class Share extends React.Component {
    render() {
        return <IoMdShare />
    }
}

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            customers: [],
            isOpen: false,
            varrr: null
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
    delete(id, title, e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        toast("Removing " + title, {
            className: "tasty",
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,

        });
        localStorage.removeItem(id);
        var list = JSON.parse(localStorage.getItem('works'));
        const index = this.state.data.findIndex(item => item.id === id);
        list.splice(index, 1)
        this.setState({ data: list })
        localStorage.setItem('works', JSON.stringify(list));


    }


    componentDidMount() {

        this.setState({ data: JSON.parse(localStorage.getItem("works")) })


    }

    render() {
        if (this.state.data !== null && this.state.data[0] !== undefined) {


            console.log("WE RECEIVED DATA HERE-----------", this.state.data)
            console.log("WE RECEIVED DATA HERE-----------", this.state.data[0])
            return (

                <>
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnVisibilityChange={false}
                        draggable={false}
                        pauseOnHover={false}
                        transition={Zoom}

                    />
                    <div style={{ marginLeft: "30px" }}>
                        <h3 style={{ marginBottom: "2px", marginTop: "2px" }}>Favorites</h3>
                        {this.state.data.map(customer =>

                            <div style={{ display: "inline-block" }}>
                                <Modal
                                    size="md"
                                    show={this.state.isOpen[customer.id]}
                                    onHide={() => this.setState({ isOpen: { [customer.id]: false } })}
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
                                                    url={customer.weburl}
                                                    hashtag="#CSCI_571_NewsApp"
                                                    className="Demo__some-network__share-button"
                                                >
                                                    <FacebookIcon size={55} round />
                                                </FacebookShareButton>
                                            </div>
                                            <div class="col-2" style={{ paddingLeft: "10px" }}  ><TwitterShareButton
                                                url={customer.weburl}
                                                hashtags={["CSCI_571_NewsApp"]}
                                                title={null}
                                                className="Demo__some-network__share-button"
                                            >
                                                <TwitterIcon size={55} round />
                                            </TwitterShareButton></div>
                                            <div class="col-4" style={{ paddingLeft: "18%" }} >
                                                <EmailShareButton
                                                    url={customer.weburl}
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



                                <div onClick={() => this.props.history.push(`/details?id=${customer.id}`)} class="card" style={{ cursor: "pointer", width: "20.5rem", marginBottom: "30px", marginTop: "7px", marginRight: "30px" }}>
                                    <div style={{ margin: "16px" }}>
                                        <h6 class="card-title" style={{ fontSize: "16px", display: "inline" }}>{customer.title}</h6>
                                        <h5 onClick={(e) => this.openModal(customer.id, e)} style={{ display: "inline", cursor: "pointer" }}><Share /></h5>
                                        <h5 onClick={(e) => this.delete(customer.id, customer.title, e)} style={{ display: "inline", cursor: "pointer" }}><MdDelete /></h5>
                                        <div className="col-md-auto card" style={{ padding: "3px" }}>


                                            <img class="card-img-top" style={{ objectFit: "cover", padding: "0px" }} src={customer.img} alt="Card image cap" />

                                        </div>
                                        <div class="card-body" style={{ padding: "0px", marginTop: "15px" }}>
                                            <h6 className="card-text" style={{ display: "inline", fontStyle: "italic" }}>{customer.date}</h6>




                                            {(() => {
                                                switch (customer.publi) {
                                                    case "Guardian": return <h6 style={{ display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(20,40,74)", color: "white", padding: "3px 7px", fontSize: "12px", fontWeight: "700" }}>GUARDIAN</h6>
                                                    case "NYTimes": return <h6 style={{ display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(221,221,221)", color: "black", padding: "3px 7px", fontSize: "12px", fontWeight: "700" }}>NYTIMES</h6>
                                                    default: return <h6 style={{ display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(110,117,124)", color: "White", padding: "3px 7px", fontSize: "12px", fontWeight: "700" }}>Default</h6>;
                                                }
                                            })()}

                                            {(() => {
                                                switch (customer.sectionid) {
                                                    case "sport": return <h6 style={{ marginRight: "7px", display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(246,194,68)", color: "black", padding: "3px 7px", fontSize: "12px", fontWeight: "700" }}>SPORTS</h6>;
                                                    case "Sports": return <h6 style={{ marginRight: "7px", display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(246,194,68)", color: "black", padding: "3px 7px", fontSize: "12px", fontWeight: "700" }}>SPORTS</h6>;
                                                    case "sports": return <h6 style={{ marginRight: "7px", display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(246,194,68)", color: "black", padding: "3px 7px", fontSize: "12px", fontWeight: "700" }}>SPORTS</h6>;
                                                    case "business": return <h6 style={{ marginRight: "7px", display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(70,150,236)", color: "white", padding: "3px 7px", fontSize: "12px", fontWeight: "700" }}>BUSINESS</h6>;
                                                    case "Business": return <h6 style={{ marginRight: "7px", display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(70,150,236)", color: "white", padding: "3px 7px", fontSize: "12px", fontWeight: "700" }}>BUSINESS</h6>;
                                                    case "politics": return <h6 style={{ marginRight: "7px", display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(65,148,136)", color: "white", padding: "3px 7px", fontSize: "12px", fontWeight: "700" }}>POLITICS</h6>;
                                                    case "Politics": return <h6 style={{ marginRight: "7px", display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(65,148,136)", color: "white", padding: "3px 7px", fontSize: "12px", fontWeight: "700" }}>POLITICS</h6>;
                                                    case "world": return <h6 style={{ marginRight: "7px", display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(124,78,255)", color: "white", padding: "3px 7px", fontSize: "12px", fontWeight: "700" }}>WORLD</h6>;
                                                    case "World": return <h6 style={{ marginRight: "7px", display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(124,78,255)", color: "white", padding: "3px 7px", fontSize: "12px", fontWeight: "700" }}>WORLD</h6>;
                                                    case "technology": return <h6 style={{ marginRight: "7px", display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(206,220,57)", color: "black", padding: "3px 7px", fontSize: "12px", fontWeight: "700" }}>TECHNOLOGY</h6>
                                                    case "Technology": return <h6 style={{ marginRight: "7px", display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(206,220,57)", color: "black", padding: "3px 7px", fontSize: "12px", fontWeight: "700" }}>TECHNOLOGY</h6>
                                                    default: return <h6 style={{marginRight: "7px" ,display: "inline", float: "right", border: "1px solid lightgrey", borderRadius: "5px", backgroundColor: "rgb(110,117,124)", color: "White", padding: "3px 7px", fontSize: "12px", fontWeight: "700" }}>{customer.sectionid.toUpperCase()}</h6>;
                                                }
                                            })()}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                        }
                    </div>
                </>

            );
        }
        else {
            return (

                <>
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnVisibilityChange={false}
                        draggable={false}
                        pauseOnHover={false}
                        transition={Zoom}

                    />
                    <h4 style={{ textAlign: "center", marginTop: "10px", fontWeight: "600" }}>You have no saved articles.</h4>
                </>
            );
        }

    }
}
export default Welcome;