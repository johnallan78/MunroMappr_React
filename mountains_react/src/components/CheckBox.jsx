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
          {value: '16', label: 'Beinn a Chroin'},
          {value: '17', label: 'Schiehallion'},
          {value: '18', label: 'Beinn Bhuidhe'},
          {value: '19', label: 'Ben Lui'},
          {value: '20', label: 'Beinn a Chleibh'},
          {value: '21', label: 'Beinn Dubhchraig'},
          {value: '22', label: 'Ben Oss'},
          {value: '23', label: 'Ben Challum'},
          {value: '24', label: 'Meall Glas'},
          {value: '25', label: 'Sgiath Chuil'},
          {value: '26', label: 'Creag Mhor'},
          {value: '27', label: 'Beinn Heasgarnich'},
          {value: '28', label: 'Meall Ghaordaidh'},
          {value: '29', label: 'Ben Lawers'},
          {value: '30', label: 'Meall Corranaich'},
          {value: '31', label: 'Meall a Choire Leith'},
          {value: '32', label: 'An Stuc'},
          {value: '33', label: 'Meall Garbh(Glen Lyon)'},
          {value: '34', label: 'Meall Greigh'},
          {value: '35', label: 'Meall nan Tarmachan'},
          {value: '36', label: 'Beinn Dorain'},
          {value: '37', label: 'Beinn an Dothaidh'},
          {value: '38', label: 'Beinn Achaladair'},


      ];

    
  

  return(
    <div>
    <h3 div id="check-box-header"> Southern Highlands </h3>
    <CheckBoxList ref="chkboxList" defaultData={data} onChange={this.handleCheckboxListChange} />
    </div>
    )
  }
}

export default CheckBox;
