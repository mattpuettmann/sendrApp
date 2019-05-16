import React, {Component} from 'react';
import '../../src/App.css'
import UserContainer from '../UserContainer/UserContainer';
import SnowContainer from './SnowContainer/SnowContainer';
import PatioContainer from './PatioContainer/PatioContainer';
import HikeContainer from './HikeContainer/HikeContainer';

class ConditionsContainer extends Component {
    constructor(){
        super();
        this.state = {
            temperature: ""
        }
    }
    componentDidMount(){
        this.showLocalConditions();
    }
    showLocalConditions = async () => {
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5ade28f3e9751e874bf8fb87b199917e/${this.props.lat},${this.props.lng}`)
        const parsedResult = await result.json();
        this.setState({
            temperature: parsedResult.currently.temperature,
            summary: parsedResult.minutely.summary,
            precip: parsedResult.currently.precipProbability,
            outlook: parsedResult.daily.summary,
            restOfDay: parsedResult.hourly.summary

        })
        if(this.state.temperature > 70){
            console.log('above 85')
            this.setState({
                rec: 'find a patio'
            })
        } else {
            console.log('below 85')
            this.setState({
                rec: 'send it!'
            })
        }
    }
    render(){
        console.log(this.state.temperature);
        return <div className="notConditionsContainer">
            
            <div className="conditionsContainer" >
            <h3>The current weather in {this.props.location}:</h3>
            <h5>Local Temperature: {this.state.temperature} °F</h5>
            <h5>Current Conditions: {this.state.summary}</h5>
            <h5>Rest of the day: {this.state.restOfDay}</h5>
            {this.state.precip && this.state.precip > 10 ? 
            <h5>Chance of Precip: {this.state.precip}%</h5>
            :
            null
            }
            <h1><span className="sendr">Sendr says:</span><br/> {this.state.rec}</h1>
            </div>
            
            <div className="locationMap">
                {this.state.temperature && this.state.temperature > 70 ?
                <PatioContainer lat={this.props.lat} lng={this.props.lng}/>
                : this.state.temperature > 50 ?
                <HikeContainer  lat={this.props.lat} lng={this.props.lng}/>            
                :   
                <SnowContainer />         
                }  
                </div>
               
        </div>
    }
}


export default ConditionsContainer;