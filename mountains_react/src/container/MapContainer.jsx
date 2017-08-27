import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MountainsContainer from './MountainsContainer.jsx';

 


export class MapContainer extends React.Component {
render() {
    const style = {
      height: '50%',
      width:  '100%'
    }
    return (
      <Map google={this.props.google} 
      zoom={8}
      style={style}
      initialCenter={{
                    lat: 56.190284,
                    lng: -4.633008
                  }}
      >
        <Marker onClick={this.onMarkerClick}
                //  pass in locations from MountainsContainer 
                postion={{lat: , lng:}}
                />
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1></h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBIZpXnFi8_N3Zu3-gKl6EurBIr4DTeGMo'
})(MapContainer)