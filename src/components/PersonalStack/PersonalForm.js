import React, {useState} from "react";
import {v4 as uuid} from "uuid";

function PersonalForm({addMyTasks}){
    

    const [myTask, setMyTask] = useState({
        id:"",
        task:"",
        completed:false
    });

    function handleTaskInputChange(e){
        setMyTask({...myTask, task: e.target.value});
    }
    function handleSubmit(e){
        e.preventDefault();
        if(myTask.task.trim()){
          addMyTasks({ ...myTask, id : uuid() });
          setMyTask({...myTask, task:""});
        }
      }

    return(
        <form onSubmit={handleSubmit}>
            <input
                className="MyForm"
                name="task"
                type="text"
                value = {myTask.task}
                onChange={handleTaskInputChange}
            />
            <button style={{height:30,borderWidth:0, textAlign:'center', width:30, borderRadius:15, marginLeft:5, fontSize:16, backgroundColor:'white'}} type="submit" >+</button>
        </form>
    );

}

export default PersonalForm;