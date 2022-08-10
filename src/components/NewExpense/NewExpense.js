import React from 'react';
import './NewExpense.css';
import NewExpenseForm
 from './NewExpenseForm';
const NewExpense = (props) => {

    const saveExpenseDataHandler =(exp)=>{
       const expenseData= {
        ...exp,
        id:Math.random().toString()
       };
       props.onAddExpense(expenseData);
    }
   
    return (
        <div className='new-expense'>
            <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;
