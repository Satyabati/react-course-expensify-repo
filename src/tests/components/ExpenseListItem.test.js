import React from 'react';
import {shallow} from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
let expense = expenses[0];
test('should render ExpenseListItem with expenses', () =>{
    const wrapper = shallow(<ExpenseListItem  {...expense}/> );
    expect(wrapper).toMatchSnapshot();
 });