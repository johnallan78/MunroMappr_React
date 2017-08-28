import React from 'react';
import MountainsContainer from '../container/MountainsContainer.jsx';

var CheckBoxList = require('react-checkbox-list');

class CheckBox extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }


render(){
  var data = [
          {value: '1', label: 'Ben Lomond'},
          {value: '2', label: 'Beinn Ime'},
          {value: '3', label: 'Beinn Narnain'},
          {value: '4', label: 'Ben Vane'},
          {value: '5', label: 'Ben Vorlich'},
          {value: '6', label: 'Ben Vorlich (Lochearnhead)'},
          {value: '7', label: 'Stuc a Chroin'},
          {value: '8', label: 'Ben More'},
          {value: '9', label: 'Stob Binnein'},
          {value: '10', label: 'An Caisteal'},
          {value: '11', label: 'Beinn Chabhair'},
          {value: '12', label: 'Beinn Ghlas'},
          {value: '13', label: 'Ben Chonzie'},
          {value: '14', label: 'Beinn Tulaichean'},
          {value: '15', label: 'Cruach Ardrain'},
          {value: '16', label: 'Beinn a Chroin'}, // check by default
      ];
  

  return(
    <CheckBoxList ref="chkboxList" defaultData={data} onChange={this.handleCheckboxListChange} />
    )
  }
}

export default CheckBox;
