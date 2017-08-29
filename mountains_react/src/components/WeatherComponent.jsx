import React from 'react'

 class WeatherComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      weather: []
    }
  }

  

  render(){
    return(
      <div>
      <div >
        Weather: {this.props.weather.description} | Pressure: {this.props.temperature.pressure} | Humidity: {this.props.temperature.humidity} | Temp: {this.props.temperature.temp} | Max: {this.props.temperature.temp_max} | Min: {this.props.temperature.temp_min} |
      </div>
      </div>  
      )
  }
}

export default WeatherComponent;