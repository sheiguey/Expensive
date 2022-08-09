import React,{useState} from 'react';
import './NewExpenseForm.css';
const NewExpenseForm = (props) => {

    const [Title,setTitle]= useState("");
    const [Amount,setAmount]= useState("");
    const [inDate,setDate]= useState("");
    // const [userInput,setUserInput]=useState({
    //   Title:"",
    //   Amount:"",
    //   Date: ""
    // })
    const titleChangeHandler=(event)=>{
      setTitle(event.target.value);
      // setUserInput({
      //   ...userInput,
      //   Title:event.target.value
      // })
    };

    const amoutHandler =(event)=>{
      setAmount(event.target.value);
      // setUserInput((prevuserinput)=>{
      //  return{
      //   ...prevuserinput,
      //   Amount:event.target.value
      //  } 
      // })
    };

    const dateHandler =(event)=>{
      setDate(event.target.value);
      // setUserInput({
      //   ...userInput,
      //   Date:event.target.value
      // })
    };


    const submitHandler =(event)=>{
    event.preventDefault();
    const data ={
      title : Title,
      amount: Amount,
      date : new Date(inDate)
    }

    props.onSaveExpenseData(data);
    setAmount('');
    setDate('');
    setTitle('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Tilte</label>
                <input type='text' value={Title} onChange={titleChangeHandler}/> 
              </div>
              <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={Amount} onChange={amoutHandler}/> 
              </div>
              <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="03-02-2021" step="03-02-2022" value={Date} onChange={dateHandler}/>  
              </div>
            </div>
            <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
            </div>
            
        </form>
    );
}

export default NewExpenseForm;
