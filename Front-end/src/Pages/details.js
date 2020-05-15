import React, { Component } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import SwitchExample from '../components/switch';
import { FacebookShareButton, EmailShareButton, TwitterShareButton } from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import Commentbox from '../components/commentbox';
import ReactTooltip from 'react-tooltip';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";
import '../components/style.css'
import { animateScroll } from "react-scroll";
import {url_1} from "../qwe"
class Expand extends React.Component {
  render() {
    return <h4 style={{ display: this.state.var1, fontSize: "30px", float: "right" }}><MdExpandMore /></h4>
  }
}




class Bookmark extends React.Component {
  render() {
    return <h4 onClick={this.do} data-tip="Bookmark" style={{ cursor: "pointer", color: "red", float: "right", fontSize: "30px" }}><FaRegBookmark /></h4>
  }
}

const override = css`
  display: block;
  border-color: red;
  position: fixed;
  top: 50%;
  left: 50%;
`;

class Compress extends React.Component {
  render() {
    return <h4 style={{ fontSize: "30px", float: "right" }}><MdExpandLess /></h4>
  }
}

// toast.configure({
//   position: "top-center",
//   autoClose: 2000,
//   hideProgressBar: true,
//   newestOnTop: true,
//   closeOnClick: true,
//   rtl: false,
//   pauseOnVisibilityChange: false,
//   draggable: false,
//   transition: Zoom,
//   pauseOnHover: false,

// })
class App extends Component {




  constructor(props) {


    super(props);
    console.log("SWTICH MATE", this.props.source12)
    this.myRef = React.createRef();
    this.myRef2 = React.createRef();
    this.state = {

      customers: [],
      varrr: false,
      var1: "block",
      var2: "none",
      month: "March",
      var3: "block",
      var4: "block",
      idhere: []

    };

  }

  letsdoit = (id, title, e) => {
    toast("Removing " + title, {
      className: "tasty",
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,

    });
    this.setState({ var3: "none", var4: "block" })
    // alert(id)
    localStorage.removeItem(id);
    var list = JSON.parse(localStorage.getItem('works'));
    const index = this.state.idhere.findIndex(item => item.id === id);
    list.splice(index, 1)
    this.setState({ data: list })
    localStorage.setItem('works', JSON.stringify(list));


  }
  do = (publication, id, weburl, title, date, text, sectionid, img) => {
    this.setState({ var3: "block", var4: "none" })
    toast("Saving " + title, {
      className: "tasty",
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,

    });


    if (localStorage.getItem('works') == null) {
      var works = [];
      var idd = []
      works.push({
        "publi": publication,
        "id": id,
        "weburl": weburl,
        "title": title,
        "date": date,
        "text": text,
        "sectionid": sectionid,
        "img": img
      })
      idd.push(id)
      localStorage.setItem('works', JSON.stringify(works));
      localStorage.setItem(id, JSON.stringify(id));
    }
    else {
      var works = JSON.parse(localStorage.getItem('works'));
      works.push({
        "publi": publication,
        "id": id,
        "weburl": weburl,
        "title": title,
        "date": date,
        "text": text,
        "sectionid": sectionid,
        "img": img
      })
      localStorage.setItem('works', JSON.stringify(works));
      localStorage.setItem(id, JSON.stringify(id));

    }
    this.setState({
      idhere: JSON.parse(localStorage.getItem('works'))
    });



  }
  change = (ref) => {
    this.setState({ var1: "none", var2: "block" })
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }
  change2 = (ref) => {
    this.setState({ var1: "block", var2: "none" })
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }
  change3 = (ref) => {
    this.setState({ var1: "none", var2: "block" })
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }
  change4 = (ref) => {
    this.setState({ var1: "block", var2: "none" })
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }
  componentDidMount() {



    if (this.props.location.search.substring(4, 9) !== "https") {
      console.log("ahi jovu padse apdse", this.props)
      const id_guard = this.props.location.search.substring(4)
      console.log(id_guard)
      fetch(url_1+'/index1/details?id=' + id_guard)
        .then(res => res.json())
        .then(customers => this.setState({ customers }, () => console.log('Article fetched...', customers)))

      // .then(this.setState({ varrr: true }))
    }
    else {
      const id_guard = this.props.location.search.substring(4)
      console.log(id_guard)
      console.log("NY MA AVE ACHE CH CHE")
      fetch(url_1+'/index1/nydetails?id=' + id_guard)
        .then(res => res.json())
        .then(customers => this.setState({ customers }, () => console.log('Articfffffle fetched...', customers)))
      // .then(this.setState({ varrr: true }))
    }

  }

  render() {


    var srccc = null
    var temp = null
    var put = null
    var total = null
    var hh = null
    var aar = ""
    if (this.props.location.search.substring(4, 9) !== "https") {
      if (this.state.customers.blocks !== undefined) {

        var tempo = this.state.customers.blocks.body[0].bodyTextSummary

        console.log("this is summary ::::", tempo)
        console.log(tempo.split(/[\.!\?]+\s/g))
        console.log(tempo.split(/[\.!\?]+\s/g).length)
        console.log(tempo.split(/[\.!\?]+\s/g)[3])
        const re = /[\.!\?]+\s/g;

        total = tempo.split(re).length - 1
        hh = tempo.split(re)
        if (total > 3) {
          var put = <div class="card-body" style={{ padding: "0px" }}>
            <div class="card-text" style={{ textAlign: "justify" }}>{tempo.split(re)[0]}. {tempo.split(re)[1]}. {tempo.split(re)[2]}. {tempo.split(re)[3]}.</div>
            <div onClick={() => { this.change(this.myRef) }} style={{ cursor: "pointer", marginTop: "19px" }}>
              <h4 style={{ display: this.state.var1, fontSize: "30px", float: "right" }}><MdExpandMore /></h4>
            </div>
          </div>

          for (i = 4; i < tempo.split(re).length; i++) {
            aar = aar + hh[i]
          }
          console.log("ssssssssssssss kem na thyus", aar)
        }

        else {
          var put =
            <div class="card-body" style={{ display: this.state.var1, padding: "0px" }}>
              <div class="card-text" style={{ textAlign: "justify" }}>{this.state.customers.blocks.body[0].bodyTextSummary}</div>
            </div>
        }

        {
          (this.state.customers.blocks.main == undefined || this.state.customers.blocks.main.elements[0].assets[0] == undefined)
            ? srccc = "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
            : srccc = this.state.customers.blocks.main.elements[0].assets.slice(-1)[0].file
        }

              {
          (this.state.customers.id in localStorage)
            ? temp = <h4 data-tip="Bookmark" onClick={(e) => this.letsdoit(this.state.customers.id, this.state.customers.webTitle, e)} data-tip="Bookmark" style={{ display: this.state.var3, cursor: "pointer", color: "red", float: "right", fontSize: "30px" }}><FaBookmark /></h4>

            : temp = <h4 data-tip="Bookmark" onClick={() => this.do(
              "Guardian",
              this.state.customers.id,
              this.state.customers.webUrl,
              this.state.customers.webTitle,
              this.state.customers.webPublicationDate.substring(0, 10),
              this.state.customers.blocks.body[0].bodyTextSummary,
              this.state.customers.sectionId,
              srccc

            )}
              data-tip="Bookmark" style={{ cursor: "pointer", display: this.state.var4, color: "red", float: "right", fontSize: "30px" }}><FaRegBookmark /></h4>
        }

        // {
        //   (this.state.customers.id in localStorage)
        //     ? alert("aa che")

        //     : alert("nathi")
        // }

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
<ReactTooltip data-for="bookmark" place="top" type="dark" effect="solid" />

            <div class="card" style={{ padding: "20px", margin: "17px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", transition: "0.3s" }}>
              <h3 ref={this.myRef2} class="card-title" style={{ fontSize: "30px" }}>{this.state.customers.webTitle}</h3>

              {/* {(() => {
              switch (this.state.customers.webPublicationDate.substring(5,7)) {
                case "01" : month = "January" ; break;
                case "02": month = "February" ; break;
                case "03": month = "March"; break;
                case "04":  month = "Aprill"; break;
                case "05":  month = "May"; break;
                case "06":  month = "June"; break;
                case "07":  month = "July"; break;
                case "08":  month = "August"; break;
                case "09":  month = "September"; break;
                case "10":  month = "October"; break;
                case "11":  month = "November"; break;
                case "12":  month = "December"; break;
                default : month = "Default"
                  }
            })()} */}

              <div className="card-text" style={{ display: "inline", fontStyle: "italic", marginLeft: "17px", marginBottom: "10px", fontSize: "22px" }}>
                {this.state.customers.webPublicationDate.substring(0, 10)}
                {/* <h4 onClick={() => this.do(
                  "Guardian",
                  this.state.customers.id,
                  this.state.customers.webUrl,
                  this.state.customers.webTitle,
                  this.state.customers.webPublicationDate.substring(0, 10),
                  this.state.customers.blocks.body[0].bodyTextSummary,
                  this.state.customers.sectionId,
                  srccc

                )}
                  data-tip="Bookmark" style={{ cursor: "pointer", display: this.state.var4, color: "red", float: "right", fontSize: "30px" }}><FaRegBookmark /></h4>

                <h4 data-tip="Bookmark" style={{ cursor: "pointer", display: this.state.var3, color: "red", float: "right", fontSize: "30px" }}><FaBookmark /></h4> */}
                {temp}


                <div style={{ float: "right", marginRight: "8%" }}>
                  <FacebookShareButton style={{ display: "inline" }}
                    data-tip="Facebook"  
                    data-for="Facebook"
                    url={this.state.customers.webUrl}
                    hashtag="#CSCI_571_NewsApp"
                    className="Demo__some-network__share-button"
                  >

                  <ReactTooltip id="Facebook" place="top" type="dark" effect="solid" />

                    <FacebookIcon  size={32} round />
                  </FacebookShareButton>
                  <TwitterShareButton style={{ display: "inline" }}
                    data-tip="Twitter"  
                    data-for="Twitter"
                    url={this.state.customers.webUrl}
                    hashtags={["CSCI_571_NewsApp"]}
                    title={null}
                    className="Demo__some-network__share-button"
                  >
                    <ReactTooltip id="Twitter" place="top" type="dark" effect="solid" />

                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <EmailShareButton style={{ display: "inline" }}
                   data-tip="Email"  
                   data-for="Email"
                    url={this.state.customers.webUrl}
                    subject={"#CSCI_571_NewsApp"}
                   
                    className="Demo__some-network__share-button"
                  >
                    <EmailIcon size={32} round />
                  </EmailShareButton>
                  <ReactTooltip id="Email" place="top" type="dark" effect="solid" />

                </div>




              </div>
              <img class="card-img-top" src={srccc} alt="Card image cap" />




              {put}

              <div onClick={() => { this.change2(this.myRef2) }} class="card-body" style={{ cursor: "pointer", marginTop: "-20px", display: this.state.var2, textAlign: "justify", padding: "0px" }}>
                <p></p>
                <div class="card-text">{aar}</div>
                <div style={{ marginTop: "19px" }}>
                  <Compress />
                </div>
              </div>



            </div>
            <Commentbox id_news={this.state.customers.id} />

            <p ref={this.myRef} className="scrollToHere"></p>

          </>
        );
      }
      else {
        return (
          <div className="sweet-loading">
            <BounceLoader
              css={override}
              size={45}
              color={"#123abc"}
              loading={this.state.loading}
            />
            <h4 className="center">Loading</h4>
          </div>
        );
      }
    }
    else {
      var use = null
      var tempp = null
      var srcc = null
      var tempo1 = null
      var total1 = null
      var puto = null
      var srrr = ""
      var tt = null
      if (this.state.customers.headline !== undefined) {


        var tempo1 = this.state.customers.abstract

        console.log("this is summary ::::", tempo1)
        console.log(tempo1.split(/[\.!\?]+\s/g))
        console.log(tempo1.split(/[\.!\?]+\s/g).length)

        const re = /[\.!\?]+\s/g;

        total1 = tempo1.split(re).length - 1
        tt = tempo1.split(re)
        if (total1 > 3) {
          var puto = <div class="card-body" style={{ padding: "0px" }}>
            <div class="card-text" style={{ textAlign: "justify" }}>{tempo1.split(re)[0]}. {tempo1.split(re)[1]}. {tempo1.split(re)[2]}. {tempo1.split(re)[3]}.</div>
            <div onClick={() => this.change3(this.myRef3)} style={{ marginTop: "19px", cursor: "pointer", }}>
              <h4 style={{ display: this.state.var1, fontSize: "30px", float: "right" }}><MdExpandMore /></h4>
            </div>
          </div>

          for (i = 4; i < tempo.split(re).length; i++) {
            srrr = srrr + tt[i]
          }
          console.log("ssssssssssssss kem na thyus", aar)
        }
        else {
          var puto =
            <div class="card-body" style={{ display: this.state.var1, padding: "0px" }}>
              <div class="card-text" style={{ textAlign: "justify" }}>{this.state.customers.abstract}</div>
            </div>
        }

        if ((this.state.customers.multimedia[0] !== [] && this.state.customers.multimedia[0] !== undefined)) {
          var qq = this.state.customers.multimedia

          for (var i = 0; i < qq.length; i++) {
            var flag = false

            if (qq[i].width > 2000) {
              flag = true
              break

            }


          }
          if (flag == true) { console.log() }
          else { i = 0 }

        }


        { //Check if message failed
          (this.state.customers.multimedia[0] == [] || this.state.customers.multimedia[0] == undefined || flag == false)
            ? srcc = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg"
            : srcc = `https://www.nytimes.com/` + this.state.customers.multimedia[i].url
        }
        {
          (this.state.customers.web_url in localStorage)
            ? tempp = <h4 data-tip="Bookmark" onClick={(e) => this.letsdoit(this.state.customers.web_url, this.state.customers.headline.main, e)} data-tip="Bookmark" style={{ display: this.state.var3, cursor: "pointer", color: "red", float: "right", fontSize: "30px" }}><FaBookmark /></h4>

            : tempp = <h4 data-tip="Bookmark" onClick={() => this.do(
              "NYTimes",
              this.state.customers.web_url,
              this.state.customers.web_url,
              this.state.customers.headline.main,
              this.state.customers.pub_date.substring(0, 10),
              this.state.customers.abstract,
              this.state.customers.news_desk,
              srcc

            )}
              data-tip="Bookmark" style={{ cursor: "pointer", display: this.state.var4, color: "red", float: "right", fontSize: "30px" }}><FaRegBookmark /></h4>
        }

        // {
        //   (this.state.customers.web_url in localStorage)
        //     ? alert("aa che")

        //     : alert("nathi")
        // }


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
            <ReactTooltip data-for="bookmark" place="top" type="dark" effect="solid" />


            <div class="card" style={{ padding: "20px", margin: "17px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", transition: "0.3s" }}>
              <h3 ref={this.myRef4} class="card-title" style={{ fontSize: "30px" }}>{this.state.customers.headline.main}</h3>

              {/* {(() => {
              switch (this.state.customers.webPublicationDate.substring(5,7)) {
                case "01" : month = "January" ; break;
                case "02": month = "February" ; break;
                case "03": month = "March"; break;
                case "04":  month = "Aprill"; break;
                case "05":  month = "May"; break;
                case "06":  month = "June"; break;
                case "07":  month = "July"; break;
                case "08":  month = "August"; break;
                case "09":  month = "September"; break;
                case "10":  month = "October"; break;
                case "11":  month = "November"; break;
                case "12":  month = "December"; break;
                default : month = "Default"
                  }
            })()} */}

              <div className="card-text" style={{ display: "inline", fontStyle: "italic", marginLeft: "17px", marginBottom: "4px", fontSize: "19.5px" }}>
                {this.state.customers.pub_date.substring(0, 10)}
                {tempp}

                <div style={{ float: "right", marginRight: "8%" }}>
                  <FacebookShareButton style={{ display: "inline" }}
                  data-tip="Facebook"  
                  data-for="Facebook"
                    url={this.state.customers.web_url}
                    hashtag="#CSCI_571_NewsApp"
                    className="Demo__some-network__share-button"
                  >
                    <ReactTooltip id="Facebook" place="top" type="dark" effect="solid" />

                    <FacebookIcon size={32} round />
                    
                  </FacebookShareButton>
                  <TwitterShareButton style={{ display: "inline" }}
                  data-tip="Twitter"  
                  data-for="Twitter"
                    url={this.state.customers.web_url}
                    hashtags={["CSCI_571_NewsApp"]}
                    title={null}
                    className="Demo__some-network__share-button"
                  >
                    <ReactTooltip id="Twitter" place="top" type="dark" effect="solid" />

                    <TwitterIcon size={32} round />

                  </TwitterShareButton>
                  <EmailShareButton style={{ display: "inline" }}
                  data-tip="Email"  
                  data-for="Email"
                    url={this.state.customers.web_url}
                    subject={"#CSCI_571_NewsApp"}
                   
                    className="Demo__some-network__share-button"
                  >
                    <ReactTooltip id="Email" place="top" type="dark" effect="solid" />

                    <EmailIcon size={32} round />
                  </EmailShareButton>
                </div>





              </div>


              { //Check if message failed
                (this.state.customers.multimedia[0] == [] || this.state.customers.multimedia[0] == undefined)
                  ? <img className="card-img-top" src={srcc} />
                  : <img class="card-img-top" src={srcc} alt="Card image cap" />
              }

              {puto}
              <div onClick={() => this.change4(this.myRef4)} class="card-body" style={{ cursor: "pointer", display: this.state.var2, textAlign: "justify", padding: "0px" }}>
                <div class="card-text">{this.state.customers.abstract}</div>
                <div style={{ marginTop: "19px" }}>
                  <Compress />
                </div>
              </div>

            </div>
            <Commentbox id_news={this.state.customers.web_url} />
            <p ref={this.myRef3} className="scrollToHere"></p>
          </>
        );
      }
      else {
        return (
          <div className="sweet-loading">
            <BounceLoader
              css={override}
              size={45}
              color={"#123abc"}
              loading={this.state.loading}
            />
            <h4 className="center">Loading</h4>
          </div>
        );
      }



    }


  }
}

export default App;

