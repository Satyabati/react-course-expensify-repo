import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';
//ADD_EXPENSE
const addExpense = ({
    description='',
    note='',
    amount=0,
    createdAt=0   
     } ={}
     )=>(
    {
        type:'ADD_EXPENSE',
        expense:{
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }


    }
)
//REMOVE_EXPENSES
const removeExpenses =({
    id=''
} = {}) =>({
    type:'REMOVE_EXPENSE',
    expense:{
        id
    }
}
)
//EDIT_EXPENSES
const editExpenses=(id,updates) => (
    {
        type:'EDIT_EXPENSE',
        id,
        updates

    }
)
//SET_TEXT_FILTER
const setTextFilter =(text="") =>(
    {  
        type:"SET_TEXT_FILTER",
        text
    }
)
//SORT_BY_DATE
const sortByDate = () =>(
    {
        type:'SORT_BY_DATE'
    }
)
//SORT_BY_AMOUNT
const sortByAmount =() =>(
    {
        type:'SORT_BY_AMOUNT'
    }
)
//SET_START_DATE
const setStartDate = (startDate)=>(
    {
        type:'SET_START_DATE',
        startDate
    }
)
//SET_END_DATE
const setEndDate = (endDate)=>(
    {
        type:'SET_END_DATE',
        endDate
    }
)
//Expenses reducers
const expensesReducerDefaultState = [];

const expensesReducer = (state=expensesReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
           return [
               ...state,
               action.expense
           ];
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id !==action.expense.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) =>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            })
        default:
            return state;
    }
}
const filterDefaultState = {
    text:"",
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}
//Filters reducers
const filterReducer = (state=filterDefaultState,action) =>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return{
                ...state,
                text:action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'amount'
            };
        case 'SORT_BY_AMOUNT' :
            return{
                ...state,
                sortBy:'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate:action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate:action.endDate
            }
        default:
            return state;
    }
}

const demoState={
    expenses: [
        {
            id:'poijasfghfg',
            description:'January Rent',
            note:'This was the final payment for the address',
            amount:54500,
            createdAt:0
        }
    ],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
};
//Get visible expenses
const getVisibleExpenses = (expenses, {text,sortBy,startDate,endDate}) =>{
    return expenses.filter((expense) =>{
        const startDateMatch = typeof startDate !=='number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !=='number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }
       
    ).sort((a,b) =>{
        if(sortBy ==='date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy==='amount'){
            console.log('inside');
            return a.amount <b.amount ?1:-1;

        }
        
    })   
}



//store creation
const store = createStore(combineReducers({
    expenses:expensesReducer,
    filters:filterReducer
}));

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses)
});
const expenseOne = store.dispatch(addExpense({description:'Rental',amount:100,createdAt:-21000}))
const expenseTwo = store.dispatch(addExpense({description:'Cofee',amount:300,createdAt:-11000}))

// store.dispatch(removeExpenses({id:expenseOne.expense.id }));
// store.dispatch(editExpenses(expenseTwo.expense.id ,{amount: 500}));
 store.dispatch(setTextFilter("e"));
//  store.dispatch(setTextFilter());
  store.dispatch(sortByAmount());
//  store.dispatch(sortByDate());
 //store.dispatch(setStartDate(250));
 store.dispatch(setEndDate(1270));
// console.log(store.getState());

// const user={
//     name:"Jen",
//     age:"27"
// }
// console.log({...user,age:"28",location:"India"});