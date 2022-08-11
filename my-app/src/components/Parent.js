import React, { useState } from "react";
import Child from "./Child";

function Parent() {
    const [lastName, setLastName] = useState('it');
    // console.log(lastName);
    return (
        <div>
            <button onClick={()=>{setLastName('p-name')}}>P-btn</button>
            <Child lastName={lastName} setLastName={setLastName} />
        </div>
    );
}

export default Parent;