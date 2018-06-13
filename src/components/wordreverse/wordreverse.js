import React from 'react';
import './wordreverse.css';

class WordReverse extends React.Component {
  constructor(){
    super();
    this.state = {
      inputValue:'',
      reverse: '',
      toUppercase: '',
      thePower:''
    }
  }//constructor

  reverseWord=(value)=>{
      let val = value.split("").reverse().join("");
      this.setState({reverse:val});
  }//wordReverse

  wordsToUpperCase=(value)=>{
    let val = value.toUpperCase();
    this.setState({toUppercase: val});
  }//wordsToUpperCase

  toThePowerOf=(value)=>{
    if (isNaN(value)===false && value !== '') {
      let num = Math.pow(value,2);
      this.setState({thePower:num});
    }else if (value === '') {
      this.setState({thePower:''});
    } else {
        this.setState({thePower:'invalid number string, insert only numbers to get a result'});
    }
  } //toThePowerOf

  handleChange=(event)=>{
    this.setState({inputValue: event.target.value});
    this.toThePowerOf( event.target.value);
    this.wordsToUpperCase(event.target.value);
    this.reverseWord(event.target.value);
  } // handleChange

  render(){
    return(
      <div className='word-component'>
        <h3>WordReverse component</h3>
        <input onChange={this.handleChange} type="text" name="" value={this.inputValue}/>
        <div>
          <p>Reverse text!</p>
          <div className='textDisplayReverse'>{this.state.reverse}</div>
        </div>
        <div>
          <p>To uppercase text!</p>
          <div className='textDisplayUpperCase'>{this.state.toUppercase}</div>
        </div>
        <div>
          <p>to the power of!</p>
          <div className='textDisplayToThePowerOf'>{this.state.thePower}</div>
        </div>
      </div>
    );//return
  }//render
} // class component


export default WordReverse;
