import React, { useState,useEffect } from "react";

function UseEffect() {
    const [number, setNumber] = useState(0);
    const [text, setText] = useState('');
    const updateNumber = () => {
        setNumber(number+1);
    }
    const inputValueChange = (e) => {
        setText(e.target.value);
    }

    // 마운팅 이후, 딱 1번만 실행 --> 빈 배열값(dependency array) 파라미터로 전달
    useEffect(() => {
        console.log('useEffect 출력');
    }, []);

    //
    useEffect(() => {
        console.log('Number 변경체크');
    }, [number]);
    useEffect(() => {
        console.log('Text 변경체크');
    }, [text]);
    useEffect(() => {
        console.log('상태 변경체크');
    }, [text, number]);

    return (
        <div>
            <div>
                <button onClick={updateNumber}>+1</button>
                <span>Current Number {number}</span>
            </div>
            <div>
                <input type="text" onChange={inputValueChange} />
                <div>{text}</div>
            </div>
        </div>
    )
}

export default UseEffect;