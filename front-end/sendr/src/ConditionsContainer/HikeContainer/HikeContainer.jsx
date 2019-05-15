import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

class HikeContainer extends Component {
  constructor(){
    super();
    this.state = {
      center: {
        lat: 42,
        lng: -87.5
      },
      zoom: 13,
      isLoading: true
    }
  }
  componentDidMount(){
    console.log(11, this.state.center.lat, this.state.center.lng, this.state.isLoading)
    this.setState({
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      },
      isLoading: false
    }, () => {
      console.log(12, this.state.center.lat, this.state.center.lng, this.state.isLoading)
    })
  }
    render() {
      console.log(13)
      const shouldRender = !this.state.isLoading;
      console.log(14, shouldRender,this.state.center.lat, this.state.center.lng);
      if (shouldRender) {
        return (
          <div style={{ height: '600px', width: 'auto' }}>  
          <small>hike map</small>   
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyDrIbIKBD3WPDwHWhiq7i9yaOEJp-C8xi4'}}
              defaultCenter={this.state.center}
              defaultZoom={this.state.zoom}
            >
            </GoogleMapReact>
          </div>
          )
      } else {
        return null
      }
      
    }
}
  
  
  
export default HikeContainer;