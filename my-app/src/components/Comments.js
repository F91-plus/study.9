import React, { Component } from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "it",
        content: "열공해라"
    },
    {
        name: "dev",
        content: "you can do it?"
    },
    {
        name: "friend",
        content: "JSON 형태이다"
    }
]

function Comments() {
    // ver1
    // return (
    //     // return 안에는 JSX 문법이 사용중이다.
    //     // for 문이 안먹음!
    //     <div>
    //         <Comment name={comments[0].name} conent={comments[0].content} />
    //         <Comment name={comments[1].name} conent={comments[1].content} />
    //         <Comment name={comments[2].name} conent={comments[2].content} />
    //         {/* <Comment name="dev" conent={"you can do it?"} />
    //         <Comment name="friend" conent={"얍얍"} /> */}
    //     </div>
    // );

    // ver2 반복문 적용시키기 위해서 이렇게 사용
    return(
        <div>
            {// 중괄호 사용할땐 return 을 사용해야한다.
                // map 이라는 것이 객체 하나하나 가져옴
                comments.map(comment => {
                    // console.log(comment); // Object
                    return (
                        <Comment name={comment.name} content={comment.content}/>
                    )
                })
            }
        </div>
    );
}
export default Comments;