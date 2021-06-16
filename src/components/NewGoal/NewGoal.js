import React, {useState} from 'react';
import './NewGoal.css';


const NewGoal = props => {
    const [enteredText, setEnteredText]= useState('');
    const addGoalHandler = event => { //the parameter named event is known by react like props parameter, 
        //this parameter carries information of the event that triggered.
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        };//fixed the issue from the old commit by removing []'s

        setEnteredText(''); 

        props.onAddGoal(newGoal); //3. proplardan onAddGoal, newGoal degiskenini tasiyor, 
        //bu da dolayli olarak App.js teki addNewGoalHandler degiskenini tetikliyor
    };

    const textChangeHandler = event => {
        setEnteredText(event.target.value);
    };


    return (<form className='new-goal' onSubmit={addGoalHandler}>
        <input type='text' value={enteredText} onChange={textChangeHandler} />
        <button type='submit'>Add Goal</button>
    </form>); //in react we have special properties like onSubmit or many others  for every JSX component. 
    //in here we used onSubmit and triggered the function named addGoalHandler
    //2.butona basildiginda addgoalHandler event fonksiyonu tetikleniyor
};

export default NewGoal;