import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense(props){

   const [isEditing, setIstEditing]=useState(false);

   let onSaveExpenseDataHandler=(enteredExpenseData)=>{
       const expenseDat={
           ...enteredExpenseData,
           id:Math.random().toString()
       };
    //    console.log(expenseData);
    props.onAddExpense(expenseDat);
    setIstEditing(false);
   }
  
   const startEditing=()=>{
     setIstEditing(true);
   };

   function stopEditing(){
      setIstEditing(false);
   };
   
   return(
        <div className="new-expense">
           {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
           {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}  onCancel={stopEditing}/>}
        </div>
   );
}


export default NewExpense;