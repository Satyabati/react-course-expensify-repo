import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getTotalExpenses from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary =({expensesTotal,expenseCount}) => {
        let amount =  numeral(expensesTotal).format('$0,0.00');
        let expenseWord = expenseCount>0 && expenseCount ===1 ? 'expense': 'expenses';
        return(
            <div>
           Viewing {expenseCount} {expenseWord} totaling {amount}
            </div>
        )
    
}

const mapStateToProps= (state)=>{
    const visibleExpenses = selectExpenses(state.expenses,state.filters);
    const expensesTotal = getTotalExpenses(visibleExpenses);
    const expenseCount = visibleExpenses.length;
    return {
        expensesTotal,
        expenseCount
    }
}
export default connect(mapStateToProps)(ExpensesSummary);