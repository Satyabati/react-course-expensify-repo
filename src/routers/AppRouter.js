import React  from "react";
import {Router, Route,Switch} from "react-router-dom";

import HelpPage from "../components/Help";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpense";
import ExpenseDashboardPage from "../components/ExpenseDashboard";
import NotFountPage from "../components/NotFound";
import LoginPage from "../components/LoginPage";

import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
export const history = createHistory();

const AppRouter = () =>(
    <Router history={history}>
    <div>
    <Switch>
    <Route path="/" component={LoginPage} exact={true}/>
    <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true}/>
    <PrivateRoute path="/create" component={AddExpensePage} exact={true}/>
    <PrivateRoute path="/edit/:id" component={EditExpensePage} exact={true}/>
    <Route path="/help" component={HelpPage} exact={true}/>
    <Route  component={NotFountPage}/>
    </Switch>
    </div>
    </Router>
)


export default AppRouter;