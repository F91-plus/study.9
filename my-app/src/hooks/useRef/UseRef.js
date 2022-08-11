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
function UseRef() {
    // setSateNumber - update 시켜주는 컴포넌트?
    const [stateNumber, setStateNumber] = useState(0);
    const refNumber = useRef(0);
    let varNumber = 0;

    const updateStateNumber = () => {
        setStateNumber(stateNumber + 1);
    }
    const updateRefNumber = () => {
        refNumber.current += 1; // 새로운 값 할당
        // 내부적으로는 refNumber.current가 +1 기능 수행이 되고 있음
        // 그러나, 업데이터 된 값이 화면에 출력되지 않음
        // 이유는 ref 수행 결과로 렌더링이 일어나지 않기 때문이다.
        // 랜더링이 일어난다는 것은 프로그램 자체에 부담을 줄 수 있음
        // 따라서 ref는 렌더링이 자주 일어나지 않아야 하는 경우에 사용가능하다.
        console.log('ref' + refNumber.current)
    }
    const updateVarNumber = () => {
        varNumber += 1;
        console.log('var' + varNumber)
    }
    const showNumbers = () => {
        <hr />
        console.log(`VarNumber : ${varNumber} --- RefNumber : ${refNumber.current}`)
    }

    return (
            <div>
                <div>
                    <p>StateNumber : {stateNumber}</p>
                    <button onClick={updateStateNumber}>StateNumber+1</button>
                </div>
                
                <div>
                    {/* 리액트에서는 객체 자체를 출력하고자 할때, 에러 발생 */}
                    {/* <p>RefNumber : {refNumber}</p> */}
                    <p>RefNumber : {refNumber.current}</p>
                    <button onClick={updateRefNumber}>RefNumber+1</button>
                </div>
                <div>
                    <p>VarNumber : {varNumber}</p>
                    <button onClick={updateVarNumber}>VarNumber+1</button>
                </div>
                <div>
                    <button onClick={showNumbers}>Show Ref/Var Number</button>
                </div>
            </div>
    );
};

export default UseRef