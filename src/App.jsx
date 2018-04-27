import React, {Component} from 'react';
import './App.css';
import Clock from './Clock';
import { Form, FormControl } from 'react-bootstrap';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      newhours:0,
      newminutes:0,
      newseconds: 0
    }
  }



  render(){
    return(
      <div className = "App-area">
      <div className = "App-title"> StopWatch Timer for : {this.state.newhours} hours {this.state.newminutes} minutes {this.state.newseconds} seconds</div>

        <Clock newhours = {this.state.newhours} newminutes = {this.state.newminutes} newseconds = {this.state.newseconds}  />

        <Form inline >
          Hours <FormControl onChange = {event => this.setState({newhours: event.target.value})} />
        {" "}Minutes <FormControl onChange = {event => this.setState({newminutes: event.target.value})} />
        {" "}Seconds <FormControl onChange = {event => this.setState({newseconds: event.target.value})} />

        </Form>
      </div>
    )
  }
}

export default App;
