import React,{component} from "react";
import smile from '../../assets/smile.png'

function StatusItem({status}){
  console.log("here");
    return(
      <div className="StatusItem">
        <h3 style={{textAlign:'left'}}>{status.name}</h3>
        <div className="space"/>
        <img style={{height:20}} src={smile} />
      </div>
    );


}
export default StatusItem;