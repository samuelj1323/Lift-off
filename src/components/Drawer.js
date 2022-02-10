import React,{component} from "react";
/** On pressing of any of these buttons, I want to move the user from one page to another of the website. */

function Drawer(){
    return (
        <div>
         <ul className="Drawer">
            <li>    <button className="btn btn-1">Dashboard</button>  </li>
            <li>    <button className="btn btn-2">Members</button>  </li>
            <li>    <button className="btn btn-3" > Chat</button>  </li>
        </ul>

    </div>

    );
    
   


}
export default Drawer;