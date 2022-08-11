import React from "react";

function Child(props) {
    console.log(props);
    return (
        <div>
            {props.lastName}
            <hr/>
            <button onClick={()=>{props.setLastName('c-name')}}>C-btn</button>
        </div>
    );
}

export default Child;