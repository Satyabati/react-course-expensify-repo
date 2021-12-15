import {addExpense,removeExpenses,editExpenses} from '../../actions/expenses';
import uuid from 'uuid';

test('Should setup remove expense action object', ()=>{
    const action = removeExpenses({
        id:'123abc'
    });
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
            id: '123abc' 
    })
});

test('Should setup edit expense action object', ()=>{
    const update = {
        description:'January Rent',
        notes:'This was the final payment for the address',
        amount:54500,
        createdAt:0
    };
    const action = editExpenses('123abc',update);
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{
            description:'January Rent',
            notes:'This was the final payment for the address',
            amount:54500,
            createdAt:0
        }
    })
});

test('Should setup add expense action object with provided value', ()=>{
    const update = {
        description:'Rent',
        notes:'Rent for january',
        amount:10000,
        createdAt:1012021  
         };
    const action = addExpense(update);
    expect(action).toEqual({
        
        type:'ADD_EXPENSE',
        expense:{
            id:expect.any(String),
            ...update
        }
    })
});

test('Should setup add expense action object with no provided value', ()=>{
    const action = addExpense({});
    expect(action).toEqual({
        
        type:'ADD_EXPENSE',
        expense:{
            id:expect.any(String),
            description:'',
            notes:'',
            amount:0,
            createdAt:0   
                }
    })
});