import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../../actions/filters';

import moment from 'moment';

test('should generate set start date object',() =>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    });

});

test('should generate set end date object',() =>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })

});

test('should generate set text filter object with no input',() =>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:""
    })

});

test('should generate set text filter object with input',() =>{
    const action = setTextFilter('abc');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:"abc"
    })

});

test('should generate sort by date object with input',() =>{
    expect(sortByDate()).toEqual({
        type:'SORT_BY_DATE'
    })

});

test('should generate sort by amount object with input',() =>{
    expect(sortByAmount()).toEqual({
        type:'SORT_BY_AMOUNT'
    })

});