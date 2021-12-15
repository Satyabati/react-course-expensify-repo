import moment from 'moment';
export default [
    {
        id:'1',
        description:'Gum',
        notes:'This was the final payment for the address',
        amount:54500,
        createdAt:0
    },
    {
        id:'2',
        description:'February Rent',
        notes:'This was the final payment for the address',
        amount:54600,
        createdAt:moment(0).subtract(4,'days').valueOf()
    },
    {
        id:'3',
        description:'Credit card',
        notes:'',
        amount:54700,
        createdAt:moment(0).add(4,'days').valueOf()
    }
]