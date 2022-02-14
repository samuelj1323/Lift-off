import React from "react";
import PersonalForm from './PersonalForm';
import List from './List';
// I want to make the size of the card dependent upon how much text is added in .
function PersonalStack({addMyTasks, removeMyTask, toggleComplete, myTasks}){
    let flicker = 0;
    let compColor = "PersonalStackSquare"
    const handleClick = () => {
        flicker += 1;
        if (flicker % 2 === 1){
            compColor = "PersonalStackSquarelav"

        }else{
            compColor = "PersonalStackSquare"
        }

    };
    return(
        <div onClick={handleClick}  className={compColor}>
            <h1>My Stack</h1>

            <List myTasks={myTasks}
                toggleComplete={toggleComplete}
                removeMyTask={removeMyTask}
            />
            <PersonalForm addMyTasks={addMyTasks} />

          
          

        </div>
    );

}
export default PersonalStack;