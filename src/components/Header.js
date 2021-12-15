import React  from "react";
import { NavLink } from "react-router-dom";
const Header = () =>(
    <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home Page</NavLink>  <br/>
    <NavLink to="/create" activeClassName="is-active" exact={true}>Create Expense Page</NavLink> <br/>
    </header>
)  
export default Header;