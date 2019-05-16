import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';


class PatioContainer extends Component {
  constructor(){
    super();
    this.state = {
      center: {
        lat: 0,
        lng: -104.9922
      },
      zoom: 13
    }
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
      console.log(this.props.center)
      console.log(this.props)
      console.log(this.state)
      console.log(this.props.lat)
      return (
        <div style={{ height: '600px', width: 'auto' }}>   
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDrIbIKBD3WPDwHWhiq7i9yaOEJp-C8xi4'}}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
          </GoogleMapReact>
        </div>
        )
    }
}
  
  
  
export default PatioContainer;