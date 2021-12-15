import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import expenses from '../fixtures/expenses';
import {  filters,altFilters} from '../fixtures/filters';

let setStartDate,setEndDate,setTextFilter,sortByDate,sortByAmount,wrapper;

beforeEach(() =>{
    setStartDate= jest.fn();
    setEndDate = jest.fn();
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
        filters={filters} 
        setTextFilter={setTextFilter} 
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
            />);
});

test('should render ExpenseListFilters correctly', () =>{
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters with alt data correctly', () =>{
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () =>{
    let value= 'bill';
    wrapper.find('input').simulate('change',{
        target:{value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () =>{
    let value= 'date';
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByDate).toBeCalled();
});

test('should sort by amount', () =>{
    let value= 'amount';
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByAmount).toBeCalled();
});

test('should handle date change', () =>{
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate:altFilters.startDate, endDate:altFilters.endDate
    })
    expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

test('should handle date focus change', () =>{
    wrapper.find('DateRangePicker').prop('onFocusChange')(true);
    expect(wrapper.state('calendarFocused')).toBe(true)
});