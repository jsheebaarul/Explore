import React from 'react';
function Legends({legend}) {
    if(legend === "Shanaia"){
        throw new Error("Not a Legendary musician")
    }
    return(
        <div>
            {legend}
        </div>
    )
}
export default Legends
