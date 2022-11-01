import React,{useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm(props){
    let [titleEntered,setTitleChanger]=useState('');
    let [AmountEntered,setAmountChanger]=useState('');
    let [DateEntered,setDateChanger]=useState('');

   function titleChanger(event){
        setTitleChanger(event.target.value);
    }

   function AmountChanger(event){
        setAmountChanger(event.target.value);
   }

   function DateChanger(event){
        setDateChanger(event.target.value);
   }

   function submitHandler(event){
       event.preventDefault();

       const expenseData = {
        title: titleEntered,
        amount: +AmountEntered,
        date: new Date(DateEntered),
      };
    //    console.log(expenseData);
       props.onSaveExpenseData(expenseData);
       setTitleChanger('');
       setAmountChanger('');
       setDateChanger('');
   }

    return (

        <form onSubmit={submitHandler}>
        <div className="new-expense__controls " >
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={titleEntered} onChange={titleChanger}></input>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='0'  value={AmountEntered} onChange={AmountChanger}></input>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="Date"   value={DateEntered} onChange={DateChanger}></input>
                </div>

        </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>cancel</button>
                <button type="submit">Add Expense</button>
            </div>

        </form>  

    );
}

export default ExpenseForm;