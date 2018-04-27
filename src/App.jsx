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
      <div>
      <div> StopWatch Timer for : {this.state.newhours} hours {this.state.newminutes} minutes {this.state.newseconds} seconds</div>

        <Clock newhours = {this.state.newhours} newminutes = {this.state.newminutes} newseconds = {this.state.newseconds}  />

        <div>Enter Time:
          Hours <input placeholder = " hours"/>
        {" "}Minutes <input placeholder = " minutes"/>
        {" "}Seconds <input placeholder = " seconds"/>

        </div>
      </div>
    )
  }
}

export default App;
