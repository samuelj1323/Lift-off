import React from "react";

function StackItem( {myTask, toggleComplete, removeMyTask}) {

    function handleCheckboxClick(){
        toggleComplete(myTask.id);
    }

    function handleRemoveClick(){
        removeMyTask(myTask.id); 
    }
    console.group(myTask.task)

    return(
        <div className="StackItem" style={{display:'flex'}}>
            <li
            className="StackItem"
            style={{
                color:"black", marginLeft:10, justifyContent:'center', alignItems:'center',textAlign:'center',
               }}
            >{myTask.task}</li>
            <button style={{alignSelf:'end'}} onClick={handleRemoveClick}>X</button>
        </div>


    )


}
export default StackItem;