import Expenseitem from "./ExpenseItem";
import './Expense.css';

function Expense(props){
    return <div className="expenses">
          {
        props.expenses.map(item=>{
           return < Expenseitem id={item.id} title={item.title} amout={item.amount} date={item.date}/> ;
        })
    }
    </div>
   
     
}


export default Expense;
