import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
  
const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
  displayMarker = () => {
      return <Marker 
      label={{
        text: this.props.title,
        color: "black",
        fontSize: "20px",
        fontWeight: "bold"
      }} 
      position={{
       lat: this.props.lat,
       lng: this.props.lng,  
      }}
     onClick={() => window.open("https://maps.google.com?q="+this.props.lat+","+this.props.lng )} />
  }

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={16}
          style={mapStyles}
          initialCenter={{ lat: this.props.lat, lng: this.props.lng}}
        >
          {this.displayMarker()}
        </Map>
    );
  }
}

const GoogleMaps = GoogleApiWrapper({
  apiKey: 'AIzaSyDlSw-M3g8M2HFMfoOMowoaMCj5QORJSk0'
})(MapContainer);

export default GoogleMaps;







