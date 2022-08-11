import React from "react";

// children 은 Hello.js 의 elements의 children에서 왔어
function View({children}) {
    // console.log(props.children);
    
    const childrenStyle = {
        border: '4px dashed navy',
        margin: 20,
        padding: 20
    }

    return (
        <div style={childrenStyle}>
            {children}
        </div>
    );
}

export default View;