import React from 'react';

const GoalList = () => { 
    return (
        <ul className="goal-list">
            <li>Finish the course.</li>
            <li>Learn the main topic.</li>
            <li>Help other students.</li>
        </ul>
    );
}
//We have created a component here, which holds a list JSX code. Be careful we are using a CSS file, but we didnt import it.
//We sould be imported the css where will we use our component, then the CSS will be activated.


export default GoalList;