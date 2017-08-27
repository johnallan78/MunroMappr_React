import React from 'react';
import Request from 'superagent'
import MapContainer from './MapContainer.jsx'
import _ from 'lodash'

class MountainsContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {}
  }

  componentWillMount(){
    //called the first time the component is loaded just before the component is loaded to the page
    var url = "http://localhost:8000/api/mountain/";
    Request.get(url).then((response)=>{
      this.setState({
        mountains: response.body.objects,
      });
    });
  }

  render(){
    var mountains = _.map(this.state.mountains, (mountain, i)=>{
      return <li key={i}> {mountain.name} {mountain.height} </li>;
    });
    return <div>
      <ul>{mountains}</ul>
      <MapContainer />
    </div>;
  }
}

export default MountainsContainer;
