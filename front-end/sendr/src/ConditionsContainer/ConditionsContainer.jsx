import React, {Component} from 'react';

class ConditionsContainer extends Component {
    constructor(){
        super();
        this.state = {
            temperature: ""
        }
    }
    componentDidMount(){
        console.log('COMPONENT DID MOUNT HOOOORAY');
        this.showLocalConditions();
    }
    showLocalConditions = async () => {
        const result = await fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5ade28f3e9751e874bf8fb87b199917e/39.742043,-104.991531')
        const parsedResult = await result.json();
        console.log(parsedResult);
        this.setState({
            temperature: parsedResult.currently.temperature,
            summary: parsedResult.minutely.summary,
            precip: parsedResult.currently.precipProbability
        })
    }


    render(){
        return <div>
            <h3>Current Conditions: {this.state.summary}</h3>
            <h4>Local Temperature: {this.state.temperature} °F</h4>
            <h4>Chance of Rain: {this.state.precip}%</h4>
        </div>
    }
}


export default ConditionsContainer;