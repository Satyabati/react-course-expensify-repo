import React  from "react";
import {connect} from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import {editExpenses} from '../actions/expenses'
import { removeExpenses} from '../actions/expenses';
export class EditExpensePage extends React.Component{
    onSubmit=(expense) =>{
        this.props.editExpenses(this.props.match.params.id,expense);
        this.props.history.push('/');
    }

    onClick = () =>{
        this.props.removeExpenses({
            id:this.props.match.params.id
        });
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
    editExpenses: (id,expense) => dispatch(editExpenses(id,expense)),
    removeExpenses: (data) => dispatch(removeExpenses(data))
    });

export default connect(mapStateToProps,mapDispatchedToProps)(EditExpensePage);