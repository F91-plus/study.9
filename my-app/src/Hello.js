import React from "react";  // import React + tab

// 1. Hello.js 컴포넌트 생성
function Hello() {
    return (
        <h1>Hello, React</h1>
    );
}

// 2. Hello.js 컴포넌트를 모듈화
export default Hello;


{/* <button className="btn-success">
    <b>
        Hello, React
    </b>
    </button>   
    이 형태를 react에선 아래 형태(객체)로 표현된다.
    하지만 JSX 사용으로 편하다
*/}
const element = {
    type: 'button',
    props: {
        className: 'btn-success',
        childern: {
            type: 'b',
            props: {
                children: "Hello, React"
            }
        } 
    }
}

// React 랜더링? 기본적인 형태
// 이렇게 사용하는데 JSX의 return 으로 간편하게 사용하는중
// var 0
// const elemnt = {
//     type: 'h1',
//     props: {
//         className: 'title',
//         childern: 'Hello, React'
//     }
// }
// var 1
// const element = 
//     React.createElement(<h1 className="title">Hello, React</h1>);
// var 2
// const element = 
//     React.createElement('h1', {className: "title"});
// var 3?
// React.DOM.render(
//      element,
//     <h1>Hello, React</h1>
//     document.getElementById('root');
// )