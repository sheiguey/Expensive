import React , {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpensiveItem.css';


function Expenseitem (props){
    const [title,setTitle]=useState(props.title);

    const handleClick = ()=>{
        console.log('test');
        setTitle('updated');
    };

    return (
       <div className="expense-item">
         <ExpenseDate date ={props.date}/>
         <div className="expense-item__description">
             <h2> {title}</h2>
             <div className='expense-item__price'>${props.amout}</div>
             <button onClick={handleClick}>Change title</button>
         </div>
       </div>
    );
       
}

export default Expenseitem;