import React  from "react";
import { BrowserRouter, Route,Switch} from "react-router-dom";

import HelpPage from "../components/Help";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpense";
import ExpenseDashboardPage from "../components/ExpenseDashboard";
import NotFountPage from "../components/NotFound";
import Header from "../components/Header";
   
const AppRouter = () =>(
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
    <Route path="/" component={ExpenseDashboardPage} exact={true}/>
    <Route path="/create" component={AddExpensePage} exact={true}/>
    <Route path="/edit/:id" component={EditExpensePage} exact={true}/>
    <Route path="/help" component={HelpPage} exact={true}/>
    <Route  component={NotFountPage}/>
    </Switch>
    </div>
    </BrowserRouter>
)


export default AppRouter;