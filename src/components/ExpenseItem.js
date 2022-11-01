// import React,{useState} from "react";
import  "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

//here parameter we can use any thing like data/props..like anything
function ExpenseItem(props){
  //here title is like variable and setTitle is re-initialsing the variable to some thing new value.and setTitle is also called state Updating function
// let [title,setTitle]=useState(props.name);

//   function clicking(){
//       setTitle('changing');
//       console.log("i am clicked!!!");
//   }

   return (
     
        <Card className="expense-item ">
            <ExpenseDate date={props.date}/>
              <div className="expense-item__description">
                  <h2>{props.name}</h2>
                  <div className="expense-item__price">{props.cost}</div>
              </div>
        </Card>

    );
}

export default ExpenseItem;

