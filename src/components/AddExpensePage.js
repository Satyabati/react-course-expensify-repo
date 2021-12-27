import React  from "react";
import {connect} from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import {startAddExpenses} from '../actions/expenses';

export class AddExpensePage extends React.Component{
    onSubmit = (expenses) =>{
      this.props.startAddExpenses(expenses);
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
  startAddExpenses: (expense) => dispatch(startAddExpenses(expense))
});

export default connect(undefined,mapDispatchedToProps )(AddExpensePage) ;