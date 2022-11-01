import React,{useState} from "react";
import Card from "./Card";
import  "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){

let [filteredYear,setFilteredYear]=useState('2021');

   function filterChangeHandler(selectedYear) {
       setFilteredYear(selectedYear);
   }

   let filteredExpense=props.UsingProps.filter(array=>{
      return array.date.getFullYear().toString()===filteredYear;
   });

  
    return(
       <div>
         <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpense}/>
            <ExpensesList items={filteredExpense}/>

            {/* just below is same as above but i used arrow function down here above is jsut calling function */}
            {/* {props.UsingProps.map(expense=> <ExpenseItem name={expense.title} cost={expense.cost} date={expense.date}/>)} */}
            {/* <ExpenseItem name={props.UsingProps[0].title} cost={props.UsingProps[0].cost} date={props.UsingProps[0].date}/>
            <ExpenseItem name={props.UsingProps[1].title} cost={props.UsingProps[1].cost} date={props.UsingProps[1].date}/>
            <ExpenseItem name={props.UsingProps[2].title} cost={props.UsingProps[2].cost} date={props.UsingProps[2].date}/> */}
         </Card>
      </div>
    );
}


export default Expenses;