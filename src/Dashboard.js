import React from "react";

function dashboard({match}){
    return(
        <div>
            <center>
                <h1>Dashboard profile name is: {match.params.name}</h1>
            </center>
        </div>
    )
}

export default dashboard