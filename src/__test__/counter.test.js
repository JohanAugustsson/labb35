import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App.js';
import Counter from '../components/counter/counter';


describe('test av App', ()=>{

  test('App render smoke without crashing', ()=>{
      let div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
  })

  test('App render shallow without crashing', ()=>{
      let wrapper = shallow(<App />);
  })
})

describe('Test of Counter', ()=>{

  test('counter render shallow without crashing', ()=>{
    let wrapper = shallow(<Counter />)
  })

  test('counter initialvalue is 0', ()=>{
    let wrapper = shallow(<Counter />)
    expect( wrapper.state('number') ).toBe(0);
  })

  test('check if increase buttons is rendered', ()=>{
    let wrapper = shallow(<Counter />)
    expect(wrapper.find('.btnIncrease').length).toBe(1)
  })

  test('check if decrease buttons is rendered', ()=>{
    let wrapper = shallow(<Counter />)
    expect(wrapper.find('.btnDecrease').length).toBe(1)
  })

  test('check if input is rendered', ()=>{
    let wrapper = shallow(<Counter />)
    expect(wrapper.find('input').length).toBe(1)
  })

  test('counter is incresed when pressed add button', ()=>{
    let wrapper = shallow(<Counter />)
    let button = wrapper.find('.btnIncrease').at(0);
    button.simulate('click');
    expect( wrapper.state('number')).toBe(1);
  })

  test('counter is decresed when pressed decrese button', ()=>{
    let wrapper = shallow(<Counter />)
    let button = wrapper.find('.btnDecrease').at(0);
    button.simulate('click');
    expect( wrapper.state('number')).toBe(-1);
  })

  test('input is showing the right state value', ()=>{
    let wrapper = shallow(<Counter />)
    let inputValue = wrapper.find('input').at(0).props().value;
    expect(wrapper.state('number')).toBe(inputValue);
  })

  test('change input value also change the state', ()=>{
    let wrapper = shallow(<Counter />)
    let keyStroke = "1"
    let input = wrapper.find('input').at(0);
    input.simulate('change',{target:{value : keyStroke}})
    expect(wrapper.state('number')).toBe(1);
  })

  test('if input dose not convert to number state and input shall not change', ()=>{
    let wrapper = shallow(<Counter />)
    let keyStroke = "w"
    let unchangedState = wrapper.state('number');
    let input = wrapper.find('input').at(0);
    input.simulate('change',{target:{value : keyStroke}})
    expect(wrapper.state('number')).toBe(unchangedState);
  })

})
