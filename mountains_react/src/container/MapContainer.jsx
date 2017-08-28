import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MountainsContainer from './MountainsContainer.jsx';

 


export class MapContainer extends React.Component {
    render() {
      var markers = this.props.mountains.map((mountain) => {
        return <Marker
          key={mountain.id}
          position={{
            lat: mountain.lat,
            lng: mountain.lon
          }}
        />
      })
      console.log(markers);
    const style = {
      height: '50%',
      width:  '100%'
    }
    return (
      <Map google={this.props.google} 
      zoom={10}
      style={style}
      clickableIcons={false}
      initialCenter={{
                    lat: this.props.initialLat,
                    lng: this.props.initialLng
                  }}
      >
      {markers}
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBIZpXnFi8_N3Zu3-gKl6EurBIr4DTeGMo'
})(MapContainer)