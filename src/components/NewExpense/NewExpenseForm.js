import React from 'react';
import './NewExpenseForm.css';
const NewExpenseForm = () => {
    const titleChangeHandler=()=>{
    console.log('title changed');
    };
    return (
        <form>
            <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Tilte</label>
                <input type='text' onChange={titleChangeHandler}/> 
              </div>
              <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01"/> 
              </div>
              <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="03-02-2021" step="03-02-2022"/>  
              </div>
            </div>
            <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
            </div>
            
        </form>
    );
}

export default NewExpenseForm;
