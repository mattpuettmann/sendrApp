import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';


class HikeContainer extends Component {
    static defaultProps = {
      center: {
        lat: 40.0150,
        lng: -105.2705
      },
      zoom: 13
    }
    render() {
      return (
        <div style={{ height: '600px', width: 'auto' }}>  
        <small>hike map</small>   
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
  
  
  
export default HikeContainer;