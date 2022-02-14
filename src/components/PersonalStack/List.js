import React from "react";
import StackItem from "./StackItem"

function List({myTasks, toggleComplete, removeMyTask}){
    
    return(
        <ul className="ScrollStackSquare">
            {myTasks.map(myTask => (
                
                <StackItem 
                    key={myTask.id} 
                    myTask={myTask} 
                    toggleComplete={toggleComplete} 
                    removeMyTask={removeMyTask}
                    />
            ))}
        </ul>
    )

}

export default List;