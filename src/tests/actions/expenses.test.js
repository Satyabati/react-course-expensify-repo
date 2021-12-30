import {addExpense,removeExpenses,editExpenses, startAddExpenses, setExpenses,startSetExpenses, startRemoveExpenses, startEditExpenses} from '../../actions/expenses';
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
const uid= 'thisismytestuid';
const defaultAuthState = {auth: {uid}};
const createMockStore = configureMockStore([thunk]);

beforeEach((done) =>{
    const expensesData = {};
    expenses.forEach(({id,description,notes,amount, createdAt}) =>{
        expensesData[id] = {description,notes,amount, createdAt};
    })
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('Should setup remove expense action object', ()=>{
    const action = removeExpenses({
        id:'123abc'
    });
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
            id: '123abc' 
    })
});

test('should remove expenses from firebase', (done) =>{
    const store = createMockStore(defaultAuthState);
    store.dispatch(startRemoveExpenses(expenses[0].id)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id:expenses[0].id
        });
        return database.ref(`users/${uid}/expenses/${expenses[0].id}`).once('value'); 
    }).then((snapshot) =>{
        expect(snapshot.val()).toBeFalsy();
        done();
    })

})

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

test('Should edit expense from database and store', (done)=>{
    
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description:'Mouse2',
        amount:100,
        notes:'dummy 2',
        createdAt:1000
    };
    store.dispatch(startEditExpenses(expenses[0].id,expenseData)).then(() =>{
        const actions = store.getActions();
        
        expect(actions[0]).toEqual({
            type:'EDIT_EXPENSE',
            id:expenses[0].id,
            updates:expenseData
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })
   done();
});
test('Should setup add expense action object with provided value', ()=>{
    
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
            type:'ADD_EXPENSE',
            expense: expenses[2]
        }
    )
});

test('Should add expense to database and store', (done)=>{
    
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description:'Mouse',
        amount:100,
        notes:'dummy 1',
        createdAt:1000
    };
    store.dispatch(startAddExpenses(expenseData)).then(() =>{
        const actions = store.getActions();
        
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })

});

test('Should add expense with defaults to database and store', (done)=>{
    
    const store = createMockStore(defaultAuthState);
    const expenseData = {};
    store.dispatch(startAddExpenses(expenseData)).then(() =>{
        const actions = store.getActions();
        
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                description:'',
                notes:'',
                amount:0,
                createdAt:0
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual({
            description:'',
            notes:'',
            amount:0,
            createdAt:0
        });
        done();
    })

});

test('should setup set expense action object with data', ()=>{
   const action = setExpenses(expenses);
   expect(action).toEqual({
       type:'SET_EXPENSES',
       expenses
   })
});

test('should fetch expenses from firebase', (done) =>{
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        });
        done();
    })

})