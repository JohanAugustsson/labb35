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

  test('counter is render without crashing', ()=>{
    let wrapper = shallow(<Counter />)
  })

  test('counter initialvalue is 0', ()=>{
    let wrapper = shallow(<Counter />)
    expect( wrapper.state('number') ).toBe(0);
  })

  test('counter is incresed when pressed add button', ()=>{
    let wrapper = shallow(<Counter />)
    let button = wrapper.find('button').at(0);
    button.simulate('click');
    expect( wrapper.state('number')).toBe(1);

  })

})
