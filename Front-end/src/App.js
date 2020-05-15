import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Content_sports from './Pages/sports';
import Content_polictics from './Pages/politics';
import Content_world from './Pages/world';
import Content_business from './Pages/business';
import Content_technology from './Pages/technology';
import Navigation from './components/navigationbar';
import Switch1 from './components/switch';
import Cus from './Pages/home';
import Content_search from './Pages/search';
import Content_details from './Pages/details'
import Content from './components/selectbox';
import Content_fav from './Pages/favorite';

class App extends Component {
  constructor(props)
  {
    super(props)
    if (localStorage.getItem('switch') == null)
    {
      var works = [];
      works.push({
        "id":true
      })
      localStorage.setItem('switch', JSON.stringify(works));
    }
    var list = JSON.parse(localStorage.getItem('switch'));
    console.log("from apsss",list)
    console.log("from apss",props)
    this.state={
      source1:list[0].id,
      path: "ho"
  
    }
  }
  
  changeitagain = (source) =>
  {
    this.setState({source1:source})
    
  }
  getpathname = (ss)=>{
    this.setState({path:ss})
  }
  render() {
  
    return (
      <React.Fragment>
        <Router>
          <Navigation handler1={this.changeitagain} />
            <Switch>
            {/* <Route exact path="/" component={()=><Cus source12={this.state.source1} />} />   */}
          <Route exact path="/"  render={(props) => <Cus {...props} source12={this.state.source1} />} />
            {/* <Route path="/home" component={Cus} />   */}
            <Route path="/politics"  render={(props) => <Content_polictics {...props} source12={this.state.source1} />} />
            <Route path="/sports"  render={(props) => <Content_sports {...props} source12={this.state.source1} />} />
            <Route path = "/details" render={(props) => <Content_details {...props} source12={this.state.source1} />} />
            <Route path="/world"  render={(props) => <Content_world {...props} source12={this.state.source1} />} />
            <Route path="/business"  render={(props) => <Content_business {...props} source12={this.state.source1} />} />
            <Route path="/technology"  render={(props) => <Content_technology {...props} source12={this.state.source1} />} />
            <Route path="/search" render={(props) => <Content_search {...props}  source12={this.state.source1} />} />
            <Route path="/favourite" render={(props) => <Content_fav {...props} source12={this.state.source1} />} />
            </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
