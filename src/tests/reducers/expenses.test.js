import expensesReducers from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'
test('should set default state',() =>{
    const state = expensesReducers(undefined,{type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id',() =>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state = expensesReducers(expenses,action);
    expect(state).toEqual( [
        expenses[0],
        expenses[2]
    ]);
})

test('should not remove expense if id not found',() =>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:'-2'
    }
    const state = expensesReducers(expenses,action);
    expect(state).toEqual(expenses);
})

//should add an expense
test('should add an expense',() =>{
    const action = {
        type:'ADD_EXPENSE',
        expense:{
            id:'4',
            description:'add expense',
            notes:'dummy expense',
            amount:54900,
            createdAt:0
        }
        }
    
    const state = expensesReducers(expenses,action);
    expect(state).toEqual([
        ...expenses,
        action.expense
    ]);
})

//should edit an expense

test('should edit an expense',() =>{
    const action = {
        type:'EDIT_EXPENSE',
        id:'3',
        updates:{
            id:'3',
            description:'add expense',
            notes:'dummy expense',
            amount:54900,
            createdAt:0
        }
        }
    
    const state = expensesReducers(expenses,action);
    expect(state).toEqual([
        expenses[0],
        expenses[1],
        action.updates
    ]);
})

//should not edit expense

test('should not  edit an expense',() =>{
    const action = {
        type:'EDIT_EXPENSE',
        updates:{
            id:'6',
            description:'add expense',
            notes:'dummy expense',
            amount:54900,
            createdAt:0
        }
        }
    
    const state = expensesReducers(expenses,action);
    expect(state).toEqual(expenses);
})