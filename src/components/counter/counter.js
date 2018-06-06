import React from 'react';


class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number : 0
    }
  }

  render(){
    return(
      <div>
        <button>+<button>
        counter
      </div>
    )
  }
}

export default Counter;

//
// class Counter extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       number : 0
//     }
//   }
//
//   handelClick = (nb) =>{
//     this.setState({
//       number: this.state.number + nb
//     })
//   }
//
//   render(){
//     return(
//       <div>
//         <button onClick={ ()=> this.handelClick(-1) } > - </button>
//         <input type="text"  value={ this.state.number }/>
//         <button onClick={ ()=> this.handelClick(1) }> + </button>
//
//       </div>
//     )
//   }
// }
