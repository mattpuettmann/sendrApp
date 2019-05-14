import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';


class SnowContainer extends Component {
  static defaultProps = {
    center: {
      lat: 39.742043,
      lng: -104.991531
    },
    zoom: 7
  }
  render() {
    return (
      <div style={{ height: '600px', width: 'auto' }}> 
      <small>snow map</small>    
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDrIbIKBD3WPDwHWhiq7i9yaOEJp-C8xi4'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    )
  }
}



export default SnowContainer;