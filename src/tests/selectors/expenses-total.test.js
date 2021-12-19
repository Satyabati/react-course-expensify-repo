import getTotalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return zero if no expenses',() =>{
    
    const result = getTotalExpenses();
    console.log('result test',result);
    expect(result).toEqual(0);
});

test('should correctly add up single expense',() =>{
    
    const result = getTotalExpenses([expenses[0]]);
    console.log('result test',result);
    expect(result).toEqual(54500);
});

test('should correctly add up multiple expenses',() =>{
    
    const result = getTotalExpenses(expenses);
    console.log('result test',result);
    expect(result).toEqual(163800);
});