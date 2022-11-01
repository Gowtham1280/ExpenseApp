import "./ExpenseDate.css";

function ExpenseDate(props){
    // let month=dt.toLocaleString("en-US",{month:"long"});
    let month=props.date.toLocaleString(["en-INDIA"], {month:"long"});
    let year=props.date.getFullYear();
    let date=props.date.getUTCDate();

    return(
     
      <div className="expense-date">
           
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year '>{year}</div>
        <div className="expense-date__day">{date}</div>
           
      </div>
        
    );
}
export default ExpenseDate;