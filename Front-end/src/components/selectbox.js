import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';
import {withRouter} from 'react-router-dom';
import _ from "lodash";


import {url_1} from "../qwe"

class WithPromises extends Component {
  constructor(props) {
    super(props);
    console.log("ssssssssssssssssssssssssssss",this.props)
    this.handleSearchChange = _.debounce(this.handleSearchChange.bind(this),1000);
}
  
  handleSearchChange = async (inputValue ) => {
    console.log("Value of search",inputValue)
    try {
      const response = await fetch(
        `https://ayushpatel.cognitiveservices.azure.com/bing/v7.0/suggestions?mkt=en-EN&q=${inputValue}`,
        
        {
          headers: {
            "Ocp-Apim-Subscription-Key": "ac024ush5etu87c74564fddaf3add9702a"
          }
        }
      );
      const data = await response.json();
      const resultsRaw = data.suggestionGroups[0].searchSuggestions;
      const results = resultsRaw.map(result => ({ value: result.displayText, label: result.displayText }));
      return results
      // this.setState({ results });
      // console.log(this.results)
    } catch (error) {
      console.error(`Error fetching search ${inputValue}`);
    }
  };

  
  sendThis = (result) =>
  {
    var tosearch = result.value;
    console.log("aa pass karisu",tosearch)
    console.log("aa su che",this)
    this.props.history.push("/search?q="+tosearch)
    
    
    
  }
  
    
  render() {
    var ee = "Enter keyword.."
    var e = undefined
    console.log("from select box bhaiiii--------------------------------",this.props.location.pathname)
    if(this.props.location.pathname !== "/search")
    {
      e = ""
    }
    else
    {
      e = undefined
    }


    return (
      <AsyncSelect 
      placeholder = {ee}
      value = {e}
      cacheOptions                 
      // loadOptions={_.debounce(this.handleSearchChange, 1000, {
      //   leading: true
      // })}
      loadOptions = {this.handleSearchChange}
      onChange = {this.sendThis}
     />
    );
  }
}
export default withRouter(WithPromises);

