import React from 'react';

import MountainsContainer from '../container/MountainsContainer.jsx';

class MountainSelector extends React.Component{

    constructor(props){
      super(props)
      this.state={
        selectedIndex: undefined
      };
    }

handleChange(event){
  var newIndex = event.target.value;
  this.setState({
    selectedIndex: newIndex
  });
  const selectedMountain = this.props.mountains[newIndex];
  const newMountain = this.props.mountain(selectedMountain);
}

render(){
  const styles = {
    margin: '0 auto',
    border: '2px solid black',
    width: '200px',
    height: '25px',
    color: 'black'

  };
  
  const options = this.props.mountains.map((mountain, index) => {
    return <option value={index} key={index}>{mountain.name} {mountain.height}</option>
  })
  
  return(
    <select style={styles} id="mountain"  placeholder="HeightChecker" onChange={this.handleChange.bind(this)}>
    {options}
    </select>
    );
  }

}

export default MountainSelector;