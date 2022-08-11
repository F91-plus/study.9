import React, { useState, useEffect, useRef } from "react";
/*
useRef : 특정 컴포넌트에 접근할 수 있는 객체
- 구조
const ref = useRef(초기값);
{current: 초기값}
- 기능
컴포넌트가 언마운팅 될때까지 컴포넌트의 정보를 유지
- 실제 사용
1) 데이터 저장 공간
2) DOM 요소에 접근
*/
function UseRef2() {
    const inputRef = useRef();

    useEffect(() => {
        // console.log(inputRef);
        inputRef.current.focus();
    }, []);

    // 입력한 값이 버튼 클릭시 alert로 출력되게 해보기!
    const ShowUserName = () => {
        alert(inputRef.current.value);
        // 잘못 입력시 검증 로직 후
        // 값 초기화
        inputRef.current.value = '';
        // 틀린 곳으로 안내
        inputRef.current.focus();
    };

    return (
        <div> 
            {/* ref!!!!! 연결하면 current: input 결과가 나옴 */}
            <input ref={inputRef} type="text" placeholder="username" />
            <button onClick={ShowUserName}>Login</button>
        </div>
    );
};


export default UseRef2;