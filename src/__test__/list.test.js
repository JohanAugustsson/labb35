import React from 'react';
import {shallow, mount, render} from 'enzyme'
import List from '../components/list/list.js'

describe('test of list', ()=>{

  test('should render without crashing', ()=>{
    const wrapper = shallow(<List />);
  })

  test('check if add buttons is rendered', ()=>{
    let wrapper = shallow(<List />)
    expect(wrapper.find('button').length).toBe(1)
  })

  test('check if input is rendered', ()=>{
    let wrapper = shallow(<List />)
    expect(wrapper.find('input').length).toBe(1)
  })

  test('should contains a list', ()=>{
    const wrapper = shallow(<List />);
    let newList;
    expect(wrapper.contains(<ul>{newList}</ul>)).toBe(true)
  })

  test('check initialstate of list', ()=>{
    const wrapper =  shallow(<List />);
    let arrayInState = wrapper.state('list');
    expect(wrapper.state('list')).toEqual([]);
  })

  test('check if state of list is rendered in ul list', ()=>{
    const wrapper =  shallow(<List />);
    wrapper.setState({list : ["test","of","array"]})

     expect(wrapper.contains(<span>test</span>)).toBe(true);
     expect(wrapper.contains(<span>of</span>)).toBe(true);
     expect(wrapper.contains(<span>array</span>)).toBe(true);
  })

  test('remove right items from list' ,()=>{
    const wrapper =  shallow(<List />);
    wrapper.setState({list : ["test","of","array"]})
    let button = wrapper.find('.btnRemove').at(0);
    button.simulate('click');
    expect(wrapper.state('list').length).toBe(2);
    expect(wrapper.state('list')).toEqual(["of","array"])
  })


  test('state text value is the connected to input value', ()=>{
    const wrapper =  shallow(<List />);
    let input = wrapper.find('input').at(0);
    let keyStroke = "hello"
    input.simulate('change',{target:{value : keyStroke}})
    expect(wrapper.state('text')).toBe(keyStroke)
  })

  test('check if button adds item to list', ()=>{
    const wrapper =  shallow(<List />);
    let currentList = wrapper.state('list');
    let input = wrapper.find('input').at(0);
    let button = wrapper.find('button').at(0);
    let keyStroke = "hello";
    input.simulate('change',{target:{value : keyStroke}})
    button.simulate('click');
    expect(wrapper.state('list')).toEqual([keyStroke])
  })

  test('check if button dont add empty input to list', ()=>{
    const wrapper =  shallow(<List />);
    let currentList = wrapper.state('list');
    let input = wrapper.find('input').at(0);
    let button = wrapper.find('button').at(0);
    let keyStroke = "";
    input.simulate('change',{target:{value : keyStroke}})
    button.simulate('click');
    expect(wrapper.state('list').length).toBe(0);
  })

})
