import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from '../actions/filters';
import {sortByDate,sortByAmount,setStartDate,setEndDate} from '../actions/filters';
import {DateRangePicker} from'react-dates';
export class ExpenseListFilters extends React.Component{
    state={
        calendarFocused:null
    }
    onDatesChange = ({startDate, endDate})=>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusChange= (calendarFocused)=>{
        this.setState({
            calendarFocused
        })
    }
    onTextChange = (e)=>{
        console.log(e.target.value);
        this.props.setTextFilter(e.target.value);
    }

    onSortChange = (e)=>{
        switch(e.target.value){
          case 'date':
              this.props.sortByDate();
          case 'amount':
              this.props.sortByAmount();
           default:
              this.props.sortByDate();
        }
      }
    render(){
        return(
            <div>
    <input type="text" value={this.props.filters.text} onChange={this.onTextChange}/>
    <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
    <option value="date">Date</option>
    <option value="amount">Amount</option>
    </select>
    <DateRangePicker
  startDate={this.props.filters.startDate} 
  endDate={this.props.filters.endDate}
  onDatesChange={this.onDatesChange}
  focusedInput={this.state.calendarFocused}
  onFocusChange={this.onFocusChange} 
  showClearDates={true}
  numberOfMonths={1}
  isOutsideRange={()=> false}
/>
    </div>
        )
    }
}


const mapStateToProps = (state)=>({filters:state.filters});
const mapDispatchToProps = (dispatch)=>({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate : (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (value) => dispatch(setTextFilter(value)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: ()=> dispatch(sortByAmount())

})

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);