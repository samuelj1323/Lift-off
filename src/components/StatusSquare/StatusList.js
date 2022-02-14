import React from "react";
import StatusItem from "./StatusItem";

function StatusList({statusList}){
    console.log('statusList: ' )
    console.log(statusList) 
    return(
        <ul className="ScrollStackSquare"> 
            {statusList.map(status =>(
                <StatusItem 
                    status={status}
                    key={status.key}
                />
            ))}
        </ul>
    );
}
export default StatusList;