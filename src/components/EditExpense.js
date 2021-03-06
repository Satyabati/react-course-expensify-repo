import React  from "react";
import {connect} from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import {startEditExpenses} from '../actions/expenses'
import { startRemoveExpenses} from '../actions/expenses';
export class EditExpensePage extends React.Component{
    onSubmit=(expense) =>{
        this.props.startEditExpenses(this.props.match.params.id,expense);
        this.props.history.push('/');
    }

    onClick = () =>{
        this.props.startRemoveExpenses(this.props.match.params.id);
        this.props.history.push('/');
    }
    render(){
        return(
            <div>
            editing the expense for item with id of {this.props.match.params.id}
             <ExpenseForm 
                expense={this.props.expense}
                onSubmit={this.onSubmit}/>
            <button onClick={this.onClick}>Remove</button>
            </div>
        )
    }
};
const mapStateToProps = (state,props)=>(
    {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    });
const mapDispatchedToProps = (dispatch , props) => ({
    startEditExpenses: (id,expense) => dispatch(startEditExpenses(id,expense)),
    startRemoveExpenses: (id) => dispatch(startRemoveExpenses(id))
    });

export default connect(mapStateToProps,mapDispatchedToProps)(EditExpensePage);