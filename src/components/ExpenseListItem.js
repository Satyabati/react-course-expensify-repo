import React from 'react';
import {NavLink } from "react-router-dom";
import moment from 'moment';
import numeral from 'numeral';
export const  ExpenseListItem = ({dispatch,id,amount,createdAt,description})=>(
    <div>
   <h3>{description}</h3>
   <p>{numeral(amount).format('$0,0.00')} 
        -
      {moment(createdAt).format('MMMM Do,YYYY')}</p>

<NavLink to={`edit/${id}`} className="lin">Edit Expense</NavLink>
</div>
);