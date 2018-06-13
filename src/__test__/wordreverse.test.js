import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App.js';
import WordReverse from '../components/wordreverse/wordreverse.js';


describe('WordReverse test suit', ()=>{

  // test that the component renders
  test('shallow smoke test', ()=>{
    let wrapper = shallow(<WordReverse/>);
  });

  // jsx elements exist in component
  test('input element exist in component', ()=>{
    let wrapper = shallow(<WordReverse/>);
	  expect(wrapper.find('input').length).toBe(1);
  });

  test('textDisplayReverse element exist in component', ()=>{
    let wrapper = shallow(<WordReverse/>);
	  expect(wrapper.find('.textDisplayReverse').length).toBe(1);
  });

  test('textDisplayUpperCase element exist in component', ()=>{
    let wrapper = shallow(<WordReverse/>);

	  expect(wrapper.find('.textDisplayUpperCase').length).toBe(1);
  });

  test('textDisplayToThePowerOf element exist in component', ()=>{
    let wrapper = shallow(<WordReverse/>);
	  expect(wrapper.find('.textDisplayToThePowerOf').length).toBe(1);
  });

  //original state value test
  test('initial state value for inputValue is "" ', () => {
  	let wrapper = shallow(<WordReverse />);
  	expect( wrapper.state('inputValue') ).toBe("");
  });

  test('initial state value for reverse is "" ', () => {
  	let wrapper = shallow(<WordReverse />);
  	expect( wrapper.state('reverse') ).toBe("");
  });

  test('initial state value for toUppercase is "" ', () => {
  	let wrapper = shallow(<WordReverse />);
  	expect( wrapper.state('toUppercase') ).toBe("");
  });

  test('initial state value for thePower is "" ', () => {
  	let wrapper = shallow(<WordReverse />);
  	expect( wrapper.state('thePower') ).toBe("");
  });


  // input changes state
  test('input updates the inputvalue state',()=>{
    let wrapper = shallow(<WordReverse/>);
    let wrapperInput = wrapper.find('input').at(0);
    wrapperInput.simulate('change',{target:{value:'hej'}});
    expect(wrapper.state('inputValue')).toBe('hej');

  });

  test('the reverse state is a reversed text string',()=>{
    let wrapper = shallow(<WordReverse/>);
    let wrapperInput = wrapper.find('input').at(0);
    wrapperInput.simulate('change',{target:{value:'hej'}});
    expect(wrapper.state('reverse')).toBe('jeh');
  });

  test('the toUppercase state makes all letters in a textstring uppercase',()=>{
    let wrapper = shallow(<WordReverse/>);
    let wrapperInput = wrapper.find('input').at(0);
    wrapperInput.simulate('change',{target:{value:'Hej 0'}});
    expect(wrapper.state('toUppercase')).toBe('HEJ 0');
  });

  test('the thePower state makes all numbers the power of 2',()=>{
    let wrapper = shallow(<WordReverse/>);
    let wrapperInput = wrapper.find('input').at(0);
    wrapperInput.simulate('change',{target:{value:'2'}});
    expect(wrapper.state('thePower')).toBe(4);

  });

  test('thePower state is  an errro message if not number',()=>{
    let wrapper = shallow(<WordReverse/>);
    let wrapperInput = wrapper.find('input').at(0);
    wrapperInput.simulate('change',{target:{value:'hej'}});
    expect(wrapper.state('thePower')).toBe('invalid number string, insert only numbers to get a result');

  });


});
