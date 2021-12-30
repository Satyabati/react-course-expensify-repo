import React  from "react";
import {connect} from 'react-redux';
import { startLogOut} from '../actions/auth'
import { NavLink } from "react-router-dom";
export const Header = ({
    startLogOut
}) =>(
    <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>  <br/>
    <NavLink to="/create" activeClassName="is-active" exact={true}>Create Expense Page</NavLink> <br/>
    <button onClick={startLogOut}>Logout</button>
    </header>
)  


const mapDispatchedToProps = (dispatch) => ({
    startLogOut :()=> dispatch(startLogOut())
});

export default connect(undefined,mapDispatchedToProps )(Header);