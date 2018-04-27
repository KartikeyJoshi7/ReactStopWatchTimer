import React, {Component} from 'react';
import './App.css';
import {Button} from 'react-bootstrap';

class Clock extends Component{

  constructor(props){
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      flag: 0
    }
  }

  secondsUpdater(new_timer){

    const new_sec = this.state.seconds;
    if(new_sec === 0){

           if(this.state.hours > -1 && this.state.hours < 1 && this.state.minutes > -1 && this.state.minutes < 1){
               const seconds = 0;
               this.setState({flag: 1});
               this.setState({seconds: seconds});
               alert('Time Up!!');
               clearInterval(new_timer);


           }

           else{
              const seconds = 59;
              this.setState({seconds: seconds});
              const new_minutes = this.state.minutes;
              if(new_minutes === 0){
                  if(this.state.hours > -1 && this.state.hours < 1){
                      const minutes = 0;
                      this.setState({minutes: minutes});

                  }
                  else{
                      const minutes = 59;
                      this.setState({minutes: minutes});
                      const new_hours = this.state.hours;
                      if(new_hours === 0){
                          const hours = 0;
                          this.setState({hours: hours});
                      }
                      else{
                      const hours = new_hours - 1;
                      this.setState({hours: hours});
                      }
                  }
              }
              else{
                 const minutes = new_minutes - 1;
                 this.setState({minutes: minutes});
              }
           }
    }
    else{
       const seconds = new_sec - 1;
       this.setState({seconds: seconds});
    }
  }


  resetter(){
      window.location.href = "http://localhost:3000/";
  }

  starter(){

    const the_timer = setInterval(()=> this.secondsUpdater(the_timer), 1000);
    document.getElementById('id2').disabled = true;
    document.getElementById('id3').disabled = true;
  }

  setTimerTo(){

      this.setState({hours: this.props.newhours, minutes: this.props.newminutes, seconds: this.props.newseconds});
  }

  render(){
    return(
    <div>
    <div className = "App-hours">{this.state.hours} hours</div>
    <div className = "App-minutes">{this.state.minutes} minutes</div>
    <div className = "App-seconds">{this.state.seconds} seconds</div>
    <Button onClick = {() => this.setTimerTo()} id = "id2" > Set Timer</Button>
    {' '}<Button onClick = {() => this.starter()} id = "id3"> Start </Button>
    {' '}<Button onClick = {() => this.resetter()}> Reset </Button>

    </div>


    )
  }
}

export default Clock;
