import React from 'react';

const GoalList = props => {  //we impoted the props we passed to this component from outside.
    return (
        <ul className="goal-list">
            {props.goals.map((goal)=>{
                return <li key={goal.id}>{goal.text}</li>;
            })}
        </ul>
    );//when we will use prop we open curly bracelets, 
    //we can not directly use the prop named goal, we have to map it
    //inside of the map, we pass goal variable and return the element however we want.
    //we added key attribute to li tag, and put some data, to not have the key warning in the console, we have to add a key to every prop item
}



export default GoalList;