import React,{component} from "react";
import StatusList from "./StatusList";

function StatusSquare({statusList}){
    return(
        <div className='TeamStatus'>
          <h1>Team Status</h1>
          <StatusList statusList={statusList} />
      
        </div>
    );


}
export default StatusSquare;