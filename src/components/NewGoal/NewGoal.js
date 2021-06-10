import React from 'react';
import './NewGoal.css';


const NewGoal = props => {
    const addGoalHandler = event => { //the parameter named event is known by react like props parameter, 
        //this parameter carries information of the event that triggered.
        event.preventDefault();
        
        const newGoal = [{
            id: Math.random().toString(),
            text: 'My new goal!'
        }];

        props.onAddGoal(newGoal); //3. proplardan onAddGoal, newGoal degiskenini tasiyor, 
        //bu da dolayli olarak App.js teki addNewGoalHandler degiskenini tetikliyor
    };

    
    return (<form className='new-goal' onSubmit={addGoalHandler}>
        <input type='text' />
        <button type='submit'>Add Goal</button>
    </form>); //in react we have special properties like onSubmit or many others  for every JSX component. 
    //in here we used onSubmit and triggered the function named addGoalHandler
    //2.butona basildiginda addgoalHandler event fonksiyonu tetikleniyor
};

export default NewGoal;