import React  from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import AppRouter , {history} from "./routers/AppRouter";
import 'normalize.css/normalize.css';
import './style/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {login, logout} from './actions/auth';
import {firebase} from './firebase/firebase';
const store = configureStore();
console.log('test');
console.log(store.getState());
// const expenseOne = store.dispatch(addExpense({description:'Water Bill',amount:10000}))
// const expenseTwo = store.dispatch(addExpense({description:'Gass Bill',amount:3000,createdAt:1000}))
// const expenseThree = store.dispatch(addExpense({description:'Rent',amount:10950,createdAt:-21000}))
// store.dispatch(setTextFilter("water"));
// setTimeout(() =>{
//     store.dispatch(setTextFilter('bill'))
// },6000)
// console.log(store.getState());
// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
// console.log(visibleExpenses)
// store.subscribe(()=>{
//     console.log('inside')
   
// });
const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
)

let hasRendered = false;
const renderApp = () =>{
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}
// class OldSyntax{
//     constructor(){
//         this.name='Mike';
//     }
//     getGreetings(){
//         return `Hi My name is ${this.name}.`;
//     }
// }
// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);
// const greetings= oldSyntax.getGreetings;
// //console.log(greetings());
// class NewSyntax{
//     name='Jay';
//     getGreetings =()=>{
//         return `Hi My name is ${this.name}.`;
//     }
// }
// const newSytax = new NewSyntax();
// const newgreetings= newSytax.getGreetings;
// console.log(newgreetings());
// console.log(newSytax);

// const Layout = (props) =>{
//     return(
//   <div>
//   <p>header</p>
//   {props.children}
//   <p>footer</p>
//   </div>
//     );
// }

// const template = (
//     <div>
//     <h1>Page Title</h1>
//     <p>This is my page</p>
//     </div>
// )


// ReactDOM.render(
//     (<Layout>
//         <div>
//     <h1>Page Title</h1>
//     <p>This is my page</p>
//     <OptionModal/>
//     </div>
//     </Layout>), document.getElementById('app'))


    ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
    firebase.auth().onAuthStateChanged((user) =>{
        if(user){
            store.dispatch(login(user.uid));
            store.dispatch(startSetExpenses()).then(() =>{
                renderApp();
               if(history.location.pathname === '/'){
                   history.push('/dashboard');
               }
            });
        }else{
         store.dispatch(logout());
         renderApp();
         history.push('/')
        }
    });

