import React  from "react";
import {Router, Route,Switch} from "react-router-dom";

import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpense";
import ExpenseDashboardPage from "../components/ExpenseDashboard";
import NotFountPage from "../components/NotFound";
import LoginPage from "../components/LoginPage";

import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
export const history = createHistory();

const AppRouter = () =>(
    <Router history={history}>
    <div>
    <Switch>
    <PublicRoute path="/" component={LoginPage} exact={true}/>
    <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true}/>
    <PrivateRoute path="/create" component={AddExpensePage} exact={true}/>
    <PrivateRoute path="/edit/:id" component={EditExpensePage} exact={true}/>
    <Route  component={NotFountPage}/>
    </Switch>
    </div>
    </Router>
)


export default AppRouter;