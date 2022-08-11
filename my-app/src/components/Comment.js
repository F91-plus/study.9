import React from "react";

function Comment(props) {
    // console.log(props.name);
    // props.name = 'server'; 
    return (
        <div>
            <span>{props.name}</span>
            <span>---</span>
            <span>{props.content}</span>
        </div>
    );
}


export default Comment;