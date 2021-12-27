import uuid from 'uuid';
import database from '../firebase/firebase';
//ADD_EXPENSE
const addExpense = (expense)=>(
    {
        type:'ADD_EXPENSE',
        expense
    }
)

 const startAddExpenses = (expenseData = {}) =>{
    return (dispatch)=>{
      const {
        description = '',
        notes = '',
        amount = 0,
        createdAt = 0
      } = expenseData;
      const expense = {description,notes, amount,createdAt};
      return database.ref('expenses')
      .push(expense)
      .then((ref) =>{
          dispatch(addExpense({
            id:ref.key,
            ...expense
          }))
        
      })
    }
};

//REMOVE_EXPENSES
const removeExpenses =({
    id=''
} = {}) =>({
    type:'REMOVE_EXPENSE',
    id
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

module.exports = {
    addExpense,
    removeExpenses,
    editExpenses,
    startAddExpenses
}