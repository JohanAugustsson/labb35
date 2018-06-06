import React from 'react';


class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number : 0
    }
  }

  handleClick=(nb)=>{
    this.setState({number: this.state.number + nb})
  }

  handleChange=(e)=>{
    let val = Number(e.target.value)
    if(val === val){ // om vi får ett NaN så kommer if satsen ej köras.. NaN är ett objekt vilket inte är lika med sig själv :)
      this.setState({number: val})
    }
  }

  render(){
    return(
      <div>
        <button className='btnDecrease' onClick={()=>this.handleClick(-1)}>-</button>
        <input onChange={this.handleChange} type="text" value={this.state.number}/>
        <button className="btnIncrease" onClick={()=>this.handleClick(1)}>+</button>
      </div>
    )
  }
}

export default Counter;
