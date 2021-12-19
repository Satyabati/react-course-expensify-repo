const getTotalExpenses = (expenses=[]) =>{
    const amountarray = expenses.map(expense => expense.amount);
    var totalExpense = amountarray.reduce(function(result, expense){
        return result + expense;
    }, 0);
    
    console.log('totalExpense',totalExpense); 
    return totalExpense;
}

export default getTotalExpenses;