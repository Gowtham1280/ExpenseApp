import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
    
if(props.items.length===0){
    return <h1>No data found !</h1>
}

    return(
        <div>
        {props.items.map(function(epense){
            return <ExpenseItem key={epense.id} name={epense.title} date={epense.date} cost={epense.cost}/>
        })}
        </div>
        );
}

export default ExpensesList;