import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


 


export class MapContainer extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       showingInfoWindow: false,
       activeMarker: {},
       selectedPlace: {},
     }
     this.onMarkerClick = this.onMarkerClick.bind(this);
   }


  onMarkerClick(props, marker , e){
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

    render() {

      
      var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
      var markers = this.props.mountains.map((mountain) => {
        return <Marker
          key={mountain.id}
          name={mountain.name}
          height={mountain.height}
          position={{
            lat: mountain.lat,
            lng: mountain.lon,
          }}
          onClick={this.onMarkerClick}
          icon= {iconBase + 'placemark_circle_highlight.png'}


        />
      })
      
    const style = {
      
      height: '90%',
      width:  '70%',
      border: '2px solid black',
      
    }

    return (
      <Map google={this.props.google} 
      zoom={9}
      style={style}
      clickableIcons={false}
      initialCenter={{
                    lat: this.props.initialLat,
                    lng: this.props.initialLng
                  }}
      >
      {markers}
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
          <div>
            <h2>{this.state.selectedPlace.name} </h2>
            <h3>{this.state.selectedPlace.height}</h3>
          </div>
      </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBIZpXnFi8_N3Zu3-gKl6EurBIr4DTeGMo'
})(MapContainer)