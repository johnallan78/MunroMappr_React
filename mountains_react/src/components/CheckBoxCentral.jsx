import React from 'react';

var CheckBoxList = require('react-checkbox-list');

class CheckBoxCentral extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }


  render(){
    var data_2 = [
            {value: '1', label: 'Ben Cruachan'},
            {value: '2', label: 'Stob Daimh'},
            {value: '3', label: 'Beinn a Chochuill'},
            {value: '4', label: 'Beinn Eunaich'},
            {value: '5', label: 'Ben Starav'},
            {value: '6', label: 'Glas Bheinn Mhor'},
            {value: '7', label: 'Stob Coir an Albannaich'},
            {value: '8', label: 'Meall nan Eun'},
            {value: '9', label: 'Beinn nan Aighenan'},
            {value: '10', label: 'Stob Ghabhar'},
            {value: '11', label: 'Stob a Choire Odhair'},
            {value: '12', label: 'Criese'},
            {value: '13', label: 'Meall a Bhuiridh'},
            {value: '14', label: 'Beinn Sgulaird'},
            {value: '15', label: 'Beinn Fionnlaidh'},
            {value: '16', label: 'Sgor na h-Ulaidh'},
            {value: '17', label: 'Sgorr Dhearg'},
            {value: '18', label: 'Sgorr Dhonuill'},
            {value: '19', label: 'Stob Dearg'},
            {value: '20', label: 'Stob na Broige'},
            {value: '21', label: 'Stob Dubh'},
            {value: '22', label: 'Stob Coire Raineach'},
            {value: '23', label: 'Bidean Nam Bian'},
            {value: '24', label: 'Stob Coire Sgreamhach'},
            {value: '25', label: 'Sgurr nam Fiannaidh'},
            {value: '26', label: 'Meall Dearg'},
            {value: '27', label: 'Mullach nan Coirean'},
            {value: '28', label: 'Stob Ban'},
            {value: '29', label: 'Sgurr a Mhaim'},
            {value: '30', label: 'Am Bodach'},
            {value: '31', label: 'Stob Choire a Chairn'},
            {value: '32', label: 'An Gearanach'},
            {value: '33', label: 'Na Gruagaichean'},
            {value: '34', label: 'Binnein Mor'},
            {value: '35', label: 'Binnein Beag'},
            {value: '36', label: 'Sgurr Eilde Mor'},
        ];  

   return(
    <div>
      <h3>Central Highlands (South)</h3>
      <CheckBoxList ref="chkboxlist-_2" defaultData={data_2} onChange={this.handleCheckboxListChange}/> 
    </div>  
    )     
  }
}


  export default CheckBoxCentral;