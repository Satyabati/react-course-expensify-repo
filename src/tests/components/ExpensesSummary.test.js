import React from 'react';
import {shallow} from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render 1 expense totaling 89',()=>{
    const wrapper = shallow(<ExpensesSummary 
        expensesTotal={89} 
        expenseCount={1}
            />);
    expect(wrapper).toMatchSnapshot();
})

test('should render 2 expenses totaling 890',()=>{
    const wrapper = shallow(<ExpensesSummary 
        expensesTotal={890} 
        expenseCount={2}
            />);
    expect(wrapper).toMatchSnapshot();
})