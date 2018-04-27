import React, {Component} from 'react';

import Clock from './Clock';


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
      <div >
      <div > StopWatch Timer for : {this.state.newhours} hours {this.state.newminutes} minutes {this.state.newseconds} seconds</div>

        <Clock newhours = {this.state.newhours} newminutes = {this.state.newminutes} newseconds = {this.state.newseconds}  />

        <div inline ><span id = "id1">Enter Time: </span>
          Hours <input onChange = {event => this.setState({newhours: event.target.value})} />
        {" "}Minutes <input onChange = {event => this.setState({newminutes: event.target.value})} />
        {" "}Seconds <input onChange = {event => this.setState({newseconds: event.target.value})} />

        </div>
      </div>
    )
  }
}

export default App;
