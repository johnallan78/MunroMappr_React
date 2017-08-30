import React from 'react';

class MountainSelector extends React.Component{

    constructor(props){
      super(props)
      this.state={
        selectedIndex: undefined
      };
    }

handleChange(event){
  var newIndex = event.target.value;
  const selectedMountain = this.props.mountains[newIndex];
  const selectedMountainLat = selectedMountain.lat
  const selectedMountainLng = selectedMountain.lon
  this.setState({
    selectedIndex: newIndex,
    selectedMountainLat: selectedMountainLat,
    selectedMountainLng: selectedMountainLng
  });
  
  console.log(selectedMountainLat)
  console.log(selectedMountainLng)
  
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
    <select style={styles} id="mountain"   onChange={this.handleChange.bind(this)}>
    {options}
    </select>
    );
  }

}

export default MountainSelector;