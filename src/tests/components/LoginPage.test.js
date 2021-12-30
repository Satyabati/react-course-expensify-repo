import React from 'react';
import { shallow } from 'enzyme';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import {LoginPage} from '../../components/LoginPage';
import expenses from '../fixtures/expenses';


let startLogin,wrapper;
beforeEach(() =>{
    startLogin= jest.fn();
    wrapper = shallow(<LoginPage 
        startLogin={startLogin} 
            />);
})
test('should render login page correctly',()=>{
     expect(wrapper).toMatchSnapshot();
})

test('should handle edit Expense and remove expense', ()=>{
    expect(wrapper).toMatchSnapshot();
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
 });