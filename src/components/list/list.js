import React from 'react';
import './list.css';


class List extends React.Component {
  constructor(props){
    super(props);
    this.state={
      list: [],
      text: ''
    }
  }

  handleClick = () =>{
    if(this.state.text){
      this.setState({
        list: [...this.state.list, this.state.text]
      })
    }
  }

  handleChange = (e) =>{
    this.setState({
      text : e.target.value
    })
  }

  handleClickRemove=(removeItem)=>{
    let list = [...this.state.list]
    list = list.filter((item,index)=> index !== removeItem)
    this.setState({ list })
  }

  render(){

    let newList = this.state.list.map( (item,index)  =>
      (<li key={index}>
        <span>{item}</span>
        <button onClick={()=>this.handleClickRemove(index)} className='btnRemove'>remove</button>
        </li>
      ))

    return(
      <div className="container-list">
        <ul>{newList}</ul>
        <input onChange={this.handleChange} text='text' />
        <button onClick={this.handleClick}>Add to list</button>
      </div>
    );
  }
}

export default List;
