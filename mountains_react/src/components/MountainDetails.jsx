import React from 'react';
import Request from 'superagent'

class Home extends React.Component{

  constructor(props){
    super(props)
    this.state = {}
  }

  componentWillMount(){
    //called the first time the component is loaded just before the component is loaded to the page
    var url = "http://localhost:8000/api/mountain/";
    Request.get(url).then((response)=>{
      this.setState({
        mountains: response
      });
    });

  }

  render(){
    return <div>
    </div>;
  }
}


