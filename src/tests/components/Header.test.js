import React from 'react';
import { shallow } from 'enzyme';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import {Header} from '../../components/Header';

test('should render Header correctly',()=>{
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper = shallow(<Header startLogOut={()=>{
        
    }} />);
     expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Expensify');

})

test('should call start logout on button click',()=>{
     const startLogOut = jest.fn();
     const wrapper = shallow(<Header startLogOut={startLogOut} />);
     wrapper.find('button').simulate('click');
    expect(startLogOut).toHaveBeenCalled();
})