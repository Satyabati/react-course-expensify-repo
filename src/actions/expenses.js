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
    return (dispatch, getState)=>{
        const uid = getState().auth.uid;
      const {
        description = '',
        notes = '',
        amount = 0,
        createdAt = 0
      } = expenseData;
      const expense = {description,notes, amount,createdAt};
      return database.ref(`users/${uid}/expenses`)
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
const removeExpenses =({id}) =>({
    type:'REMOVE_EXPENSE',
    id
}
)

const startRemoveExpenses = (id='')=>{
    return (dispatch,getState)=>{
        const uid = getState().auth.uid;
      return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
               dispatch(removeExpenses({
                   id
               }))
           })
    }
}
//EDIT_EXPENSES
const editExpenses=(id,updates) => (
    {
        type:'EDIT_EXPENSE',
        id,
        updates

    }
)

const startEditExpenses = (id,updates) =>{
    return (dispatch,getState) =>{
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`)
        .update(updates)
        .then(() =>{
            dispatch(editExpenses(id,updates))
        })
    }
}

//SET_EXPENSES
const setExpenses = (expenses) =>({
 type:'SET_EXPENSES',
 expenses

})

const startSetExpenses = () =>{
    
    return (dispatch,getState) =>{
        const uid = getState().auth.uid;
        let expenses = [];
        return database.ref(`users/${uid}/expenses`)
     .once('value').then((snapshot) =>{
      snapshot.forEach((childDataSnapShot) =>{
        expenses.push({
          id:childDataSnapShot.key,
           ...childDataSnapShot.val()
         });
       });
     }).catch((e)=>{
       console.log('Error with data fetching', e)
      }).then(() =>{
          dispatch(setExpenses(expenses))
      });
    }
}

module.exports = {
    addExpense,
    removeExpenses,
    editExpenses,
    startAddExpenses,
    setExpenses,
    startSetExpenses,
    startRemoveExpenses,
    startEditExpenses
}