import React, { useCallback, useEffect, useState } from "react";

function UseCallback() {
    // 초기값 설정, useState
    const [number, setNumber] = useState(0);
    // console.log(number)
    // const showNumber = () => {
    //     console.log(`Show Number : ${number}`);
    // }

    // useffct에 showNumber 를 추적하게 저장함
    //화살표로 숫자를 변경시, showNumber 함수는 변경되지 않았음에도 불구하고 
    // useEffect 가 계속해서 실행됨
    // 그 이유는'

    // number의 상태가 계속 갱신되고, UseCallback 컴포넌트는 랜더링
    // 그 결과, 컴포넌트 내부에 있는 모든 변수, 함수가 재실행되고
    // 함수 혹은 객체는 실행  될 때마다 새로운 주소값으 읽어 옴 
    // 이는 다른 객체로 인식되어 useEffect에서는 계속해서 showNumber 함수가 변경되었다고 판단
    // 그 결과 useEffect가 계속 실행됨

    // useCallback 사용
    // const showNumber = useCallback(() => {
    //     console.log(`Show Number : ${number}`);
    // }, []);

    const showNumber = useCallback(() => {
        console.log(`Show Number : ${number}`);
    }, [number])

    useEffect(() => {
        console.log('변경 상태 확인');
    }, [showNumber]);

    // callback 리턴 값으로 함수
    const [toggle, setToggle] = useState(true);

    return (
        <div>
            <input 
                type="number" 
                onChange={(e) => {setNumber(e.target.value)}}/>
                <br />
                <button onClick={showNumber}>Show Number</button>

                <br />
                <button onClick={() => {setToggle(!toggle)}}>{toggle.toString()}</button>
                {/* toString으로 useState의 글자를 초기에 보여줌 */}
        </div>
    );
}

export default UseCallback;