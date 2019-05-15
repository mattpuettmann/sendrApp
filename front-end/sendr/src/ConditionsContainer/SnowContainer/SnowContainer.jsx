import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';


class SnowContainer extends Component {
  constructor(){
    super();
    this.state = {
      center: {
        lat: 39.742043,
        lng: -104.991531
      },
      zoom: 7
    }
    console.log(1, this.state.center.lat, this.state.center.lng);
  }
  componentDidMount(){
    this.setState({
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    })
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