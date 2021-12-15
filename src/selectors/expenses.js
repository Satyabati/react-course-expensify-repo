//Get visible expenses
import moment from 'moment';
 const getVisibleExpenses = (expenses, {text,sortBy,startDate,endDate}) =>{
    return expenses.filter((expense) =>{
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
        const endDateMatch = endDate? endDate.isSameOrAfter(createdAtMoment,'day'):true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }
       
    ).sort((a,b) =>{
        if(sortBy ==='date'){
            console.log('date sorting')
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy==='amount'){
            console.log('inside');
            return a.amount <b.amount ?1:-1;

        }
        
    })   
}

export default getVisibleExpenses;