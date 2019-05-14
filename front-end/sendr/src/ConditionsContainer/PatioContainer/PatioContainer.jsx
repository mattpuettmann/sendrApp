import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';


class PatioContainer extends Component {
    static defaultProps = {
      center: {
        lat: 39.7452,
        lng: -104.9922
      },
      zoom: 13
    }
    render() {
      return (
        <div style={{ height: '600px', width: 'auto' }}>     
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
  
  
  
export default PatioContainer;