import React, { useState } from 'react';

import './App.css'; //We imported our CSS file
import GoalList from './components/GoalList/GoalList'; //Example import of a component we have created.
import NewGoal from './components/NewGoal/NewGoal';

const App =()=> {
  
    const [courseGoals, setCourseGoals] = useState([
      { id: 'cg1', text: 'Finish the course.' },
      { id: 'cg2', text: 'Learn the main topic.' },
      { id: 'cg3', text: 'Help other students.' }
    ]);//useState 2 parametre tasir , ilki veriyi, 2. si veriyi update etme fonksiyonunu
    //state in amaci canli veri degisimi, bu veri degistikce tekrar render edilecek


    const addNewGoalHandler = newGoal => {
      setCourseGoals(courseGoals.concat(newGoal));//4.gelen newGoal degeriyle courseGoals state i update ediliyor 
      //ve canli olarak listeye yeni eleman ekleniyor
      
    };
    console.log(courseGoals);
    return (<div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>);//1.NewGoal componentine onAddGoal diye bir prop yolluyoruz, o da addNewGoalHandler fonksiyonunu tasiyor
  
}

export default App;
