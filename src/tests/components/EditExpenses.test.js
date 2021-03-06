import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let startEditExpenses,startRemoveExpenses,history,wrapper,param;

beforeEach(() =>{
    startEditExpenses= jest.fn();
    startRemoveExpenses = jest.fn();
    history = {push: jest.fn()};
    param = {params:{id: expenses[1].id}}
    wrapper = shallow(<EditExpensePage 
        startEditExpenses={startEditExpenses} 
        startRemoveExpenses={startRemoveExpenses} 
        history={history} 
        expense={expenses[1]}
        match={param}
            />);
})
test('should render editExpense correctly', ()=>{

   expect(wrapper).toMatchSnapshot();
});

test('should handle edit Expense and remove expense', ()=>{
    expect(wrapper).toMatchSnapshot();
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    wrapper.find('button').prop('onClick')(expenses[1].id);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpenses).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
    expect(startRemoveExpenses).toHaveBeenLastCalledWith(expenses[1].id)
 });