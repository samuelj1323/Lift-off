
import './App.css';
import React, {useEffect, useState} from 'react';
import Header from "./components/Header"
import Drawer from './components/Drawer';
import PersonalStack from './components/PersonalStack/PersonalStack';
import StatusSquare from './components/StatusSquare/StatusSquare';



function App() {
  const [myTasks, setMyTasks] = useState([]);
  const [statusList, setStatusList] = useState([
    {
      name:"Sam",
      status:'../../assets/smile.png',
      key:'1',
    },
    {
      name:"Hannah",
      status:'../../assets/smile.png',
      key:'2'
    }
  ]);

  function addMyTasks(myTask){
    setMyTasks([myTask, ...myTasks]);
  }

  function toggleComplete(id){
    setMyTasks(
      myTasks.map(myTask =>{
        if(myTask.id === id){
          return{
            ...myTask,
            completed: !myTask.completed
          };
        }
      })
    );
  }

  function removeMyTask(id){
    setMyTasks(myTasks.filter(myTask => myTask.id !== id));
  }

  return (
    <div className="App">
      <Header />
      {/**I want to add in the nav drawer to the far left, and then populating everything to the right of it. */}
      <div className='Body'>
        <Drawer/>
        <PersonalStack 
          addMyTasks={addMyTasks} 
          toggleComplete={toggleComplete} 
          removeMyTask={removeMyTask}
          myTasks={myTasks}

        />
        <StatusSquare statusList={statusList}/>
        

      </div>
      
      
      

    </div>
  );
}

export default App;
