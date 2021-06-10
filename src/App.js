import React from 'react';

import './App.css'; //We imported our CSS file
import GoalList from './components/GoalList'; //Example import of a component we have created.


class App extends React.Component {
  render() {
    const courseGoals = [
      { id: 'cg1', text: 'Finish the course.' },
      { id: 'cg2', text: 'Learn the main topic.' },
      { id: 'cg3', text: 'Help other students.' }
    ]; //We have created a data

    return <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals} /> 
    </div>;//we are passing our data to the component with the name of goals
  }
}

export default App;
