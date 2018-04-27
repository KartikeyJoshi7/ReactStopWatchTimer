import React, {Component} from 'react';


class Clock extends Component{

  constructor(props){
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,

    }
  }

  render(){
    return(
    <div>
    <div >{this.props.newhours} hours</div>
    <div >{this.props.newminutes} minutes</div>
    <div >{this.props.newseconds} seconds</div>
    <button> Set Timer</button>
    <button > Start </button>
    <button> Reset </button>

    </div>


    )
  }
}

export default Clock;
