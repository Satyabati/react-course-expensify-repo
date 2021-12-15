import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = ({
    description='',
    notes='',
    amount=0,
    createdAt=0   
     } ={}
     )=>(
    {
        type:'ADD_EXPENSE',
        expense:{
            id: uuid(),
            description,
            notes,
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
    editExpenses
}