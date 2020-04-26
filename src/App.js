import React, { Component } from 'react';
import axios from 'axios';
import Output from './Output';
import Controls from './Controls';

class App extends Component {
 constructor(props){
   super(props);
   this.state={
     paras:'',
     text:''
   }
 }
  getText=()=>{
    axios.get(`https://hipsum.co/api/?type=hipster-latin&paras=1`).then(res=>{
    this.setState({text:res.data})
  })
  }
 componentDidMount(){
  this.getText();
}
noOfParas=(no)=>{
   this.setState({paras:no})
  
    axios.get(`https://hipsum.co/api/?type=hipster-latin&paras=${no}`).then(res=>{
      this.setState({text:res.data})

    })

  
}
  render() {
    return (
      <div>
        <Controls noOfParas={this.noOfParas} value={this.state.paras}></Controls>
        <Output value={this.state.text}></Output>
      </div>
    );
  }
}

export default App;