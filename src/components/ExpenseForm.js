import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


const now = moment();
export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            description: props.expense?props.expense.description: '',
            notes: props.expense? props.expense.notes:'',
            amount:props.expense? (props.expense.amount).toString():'',
            createdAt:props.expense?moment(props.expense.createdAt):moment(),
            calendarFocused:false,
            error:''
    
        };
    }

    onDescriptionChange =(e) =>{
        const description = e.target.value;
        this.setState(() =>({ description}));
    };
    onNoteChange = (e) =>{
        const notes = e.target.value;
        this.setState(() =>({ notes}));
    };
    onAmountChange =(e) =>{
     const amount = e.target.value;
     if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
         this.setState(() =>({amount}));
     }
    };
    onDateChange =(createdAt)=>{
        if(createdAt){
            this.setState(() =>({createdAt}))
        }
    };
    onSubmit = (e) =>{
      e.preventDefault();

      if(!this.state.description || !this.state.amount){
          //set error state equal to 'Please provide description and amount.'
          this.setState(() =>({
              error:'Please provide description and amount.'
          }))

      }else{
          //reset error
          this.setState(() =>({
            error:''
        }))
        this.props.onSubmit({
          description:this.state.description,
          amount:parseFloat(this.state.amount, 10),
          createdAt: this.state.createdAt.valueOf(),
          notes: this.state.notes
        })
        console.log('Submitted')
      }
    }

    onFocusChange =({ focused}) =>{
        this.setState(() => ({calendarFocused: focused}))
    };
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
            <input type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
            />
            <input 
             type="text"
             placeholder="Amount"
             value={this.state.amount}
             onChange={this.onAmountChange}
             />
             <SingleDatePicker
               date={this.state.createdAt}
               onDateChange={this.onDateChange}
               focused={this.state.calendarFocused}
               onFocusChange={this.onFocusChange}
               numberOfMonths={1}
               isOutsideRange={() => false}
               />
             <textarea
             placeholder="Add a note for your expense (optional)"
             value={this.state.notes}
             onChange={this.onNoteChange}
             ></textarea>
             <button>Add Expense</button>
            </form>
            </div>
        )

    }
}