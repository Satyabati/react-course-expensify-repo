import React from 'react';
import {NavLink } from "react-router-dom";
export const  ExpenseListItem = ({dispatch,id,amount,createdAt,description})=>(
    <div>
   <h3>{description}</h3>
   <p>{amount} -{createdAt}</p>

<NavLink to={`edit/${id}`} className="lin">Edit Expense</NavLink>
</div>
);