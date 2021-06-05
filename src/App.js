import React from 'react';

import './App.css'; //We imported our CSS file
import GoalList from './components/GoalList'; //Example import of a component we have created.


class App extends React.Component {
  render() {
    return <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList /> 
    </div>;
  }//<GoalList /> is an example use of a component we have created and imported.
}//These looks like html, but they are JSX eventually they will be translated to html.
//The div tag in the return statement takes className attribute, this is class we know from the HTML, but since Javascript
//Has a component called class, JSX uses className instead of class keyword.

export default App;
