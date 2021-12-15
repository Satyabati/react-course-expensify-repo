import filtersReducers from '../../reducers/filters'
import moment from 'moment';
test('Should setup default filter values',() =>{
  const state = filtersReducers(undefined, { type: '@@INIT'});
  expect(state).toEqual(
    {
        text:"",
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    }
  )
});

test('should set sortBy to amount',() =>{
    const state = filtersReducers(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toEqual('amount')
  });

  test('should set sortBy to date',() =>{
    const state = filtersReducers( {
        text:"",
        sortBy:'amount',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    }, { type: 'SORT_BY_DATE'});
    expect(state.sortBy).toEqual('date')
  });

  test('should set text filter',() =>{
      const state = filtersReducers( {
        text:"",
        sortBy:'amount',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    }, { type: 'SET_TEXT_FILTER',text:'filter text'});
    expect(state.text).toEqual('filter text')
  })

  //should set start date filter

  test('should set start date  filter',() =>{
    const state = filtersReducers( {
      text:"",
      sortBy:'amount',
      startDate:undefined,
      endDate:moment().endOf('month')
  }, { type: 'SET_START_DATE',startDate:moment().startOf('month')});
  expect(state.startDate).toEqual(moment().startOf('month'));
});

//should set end date filter

test('should set end date  filter',() =>{
    const state = filtersReducers( {
      text:"",
      sortBy:'amount',
      startDate:undefined,
      endDate:moment().endOf('month')
  }, { type: 'SET_END_DATE',endDate:moment().startOf('month')});
  expect(state.endDate).toEqual(moment().startOf('month'));
});