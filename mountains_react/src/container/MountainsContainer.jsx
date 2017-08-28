import React from 'react';
import Request from 'superagent'

import MapContainer from './MapContainer.jsx'
import MountainSelector from '../components/MountainSelector.jsx'
import CheckBox from '../components/CheckBox.jsx'

var CheckBoxList = require('react-checkbox-list');




class MountainsContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      initialLat: 56.356429,
      initialLng: -4.576151,
      mountains: []
    }
  }

  componentWillMount(){
    //called the first time the component is loaded just before the component is loaded to the page
    var url = "http://localhost:8000/api/mountain/?limit=0";
    Request.get(url).then((response)=>{
      this.setState({
        mountains: response.body.objects
      });
    });
  }

  setMountain(mountain){
      this.setState({
          mountain: mountain
      });
  }

  render(){
   
    
    return(
      <div>
      <h1>MunroMap</h1>
      <div className='main'>
      <div className='checkbox-and-menu'>
      <div className="mountain-selector">
      <MountainSelector
        mountains={this.state.mountains}
        mountain={this.setMountain.bind(this)}
       />
       </div>
       <div className="checkbox">
        <CheckBox
        mountains={this.state.mountains}
        />
       </div>
       </div>
      <div className= "map-container">
      <MapContainer 
        initialLat={this.state.initialLat} 
        initialLng={this.state.initialLng} 
        mountains={this.state.mountains}
        mountain={this.setMountain.bind(this)}
      />
      </div>
      </div>
      </div>
    );

}
}

export default MountainsContainer;
