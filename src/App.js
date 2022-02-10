
import './App.css';
import rocket from "./assets/rocket.png"
import Drawer from './components/Drawer';


function App() {
  return (
    <div className="App">
      <header className="App-header"> {/**I'm trying to create a header bar here. */}
        <img className="App-header" src={rocket} alt="logo"/>
       
        <h3>Lift-Off</h3>
        
      </header>
      {/**I want to add in the nav drawer to the far left, and then populating everything to the right of it. */}
      <Drawer/>
      

    </div>
  );
}

export default App;
