import React,{component} from "react";
import rocket from "../assets/rocket.png"
/** On pressing of any of these buttons, I want to move the user from one page to another of the website. */

function Header(){
    return (
        <header className="App-header"> {/**I'm trying to create a header bar here. */}
            <img className="App-header header-image" src={rocket} alt="logo"/>
        
            <h3>Lift-Off</h3>
        
      </header>

    );
    
   


}
export default Header;