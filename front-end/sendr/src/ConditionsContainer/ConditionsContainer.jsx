import React, {Component} from 'react';
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
        const result = await fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5ade28f3e9751e874bf8fb87b199917e/39.742043,-104.991531')
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
        return <div>
            <h3>Local Temperature: {this.state.temperature} °F</h3>
            <h4>Current Conditions: {this.state.summary}</h4>
            <h4>Rest of the day: {this.state.restOfDay}</h4>
            {this.state.precip && this.state.precip > 10 ? 
            <h4>Chance of Precip: {this.state.precip}%</h4>
            :
            null
            }
            <h4>Outlook for the week: {this.state.outlook}</h4>
            <h1>SENDR SAYS: {this.state.rec}</h1>
                {this.state.temperature && this.state.temperature > 70 ?
                <PatioContainer />
                : this.state.temperature > 50 ?
                <HikeContainer />            
                :   
                <SnowContainer />         
                }   
        </div>
    }
}


export default ConditionsContainer;