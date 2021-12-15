import React  from "react";
import {connect} from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import {addExpense} from '../actions/expenses';

export class AddExpensePage extends React.Component{
    onSubmit = (expenses) =>{
      this.props.addExpense(expenses);
      this.props.history.push('/');
    };

    render(){
        return (
        <div>
        <h1>Add Expenses</h1>
        <ExpenseForm 
         onSubmit={this.onSubmit}
       />
        </div>
        )
    }
} 
const mapDispatchedToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined,mapDispatchedToProps )(AddExpensePage) ;