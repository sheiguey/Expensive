import React from 'react';
import './NewExpense.css';
import NewExpenseForm
 from './NewExpenseForm';
const NewExpense = (props) => {

    const expenseData =(exp)=>{
       return {
        ...exp,
        id:Math.random().toString()
       }
       props.addexpense(expenseData);
    }
   
    return (
        <div className='new-expense'>
            <NewExpenseForm onSaveExpenseData={expenseData}/>
        </div>
    );
}

export default NewExpense;
