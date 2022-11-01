import React,{useState} from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/Newexpense/NewExpense';

let Using=[
  {id:1,title:'Laptop',cost:'100000',date:new Date()},
  {id:2,title:'iPhone',cost:'128000',date:new Date()},
  {id:3,title:'Bullet',cost:'300000',date:new Date()},
  {id:4,title:'House',cost:'1000000',date:new Date()}
];

function App() {
 

  const [UsingProps,setUsingProps]= useState(Using);

  const addExpenseHandler= (expense)=>{
    console.log(expense);
    setUsingProps((prevUsingProps)=>[expense, ...prevUsingProps]);
    
  };
 
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses UsingProps={UsingProps} />
     </div>
  );
}

export default App;