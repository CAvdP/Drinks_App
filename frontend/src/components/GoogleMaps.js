import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// styles so it will fit to the parent container //  
const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
  // generate marker give properties to the label to style the marker //
  displayMarker = () => {
      return <Marker 
      label={{
        text: this.props.title,
        color: "black",
        fontSize: "20px",
        fontWeight: "bold"
      }} 
      // position of the marker //
      position={{
       lat: this.props.lat,
       lng: this.props.lng,  
      }}
     // onclick on the marker, it will redirect you to googlemaps website at the right location //
     onClick={() => window.open("https://maps.google.com?q="+this.props.lat+","+this.props.lng )} />
  }
  // render the map with the marker in it //
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
// wrap the whole map in a container and add the API key, (normally from Database, insteat of hardcode) //
const GoogleMaps = GoogleApiWrapper({
  apiKey: 'AIzaSyDlSw-M3g8M2HFMfoOMowoaMCj5QORJSk0'
})(MapContainer);

export default GoogleMaps;







