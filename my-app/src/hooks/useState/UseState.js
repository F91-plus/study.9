import React, { useState } from "react";

function UseState() {
    // step01 : import -> useState
    // step02 : const [state, setState] = useState(초기값)
    const [number, setNumber] = useState(0);

    const onClickHandler = () => {
        // console.log('클릭 핸들러');
        // state 직접 값을 할 당 할 수 없음
        // 바꿔주기 위해서 사용함수가 바로 setNumber() 이다.
        // number += 1;

        setNumber(number + 1);
        // 클릭 시, 한번에 2가 증가하도록 지정
        // setNumber(number + 2);
        // ! 여기서 문제 1,과 2가 같이 있는데 왜 3이 증가 안하지?
        // setNumber가 즉시 number에 대한 값의 변화가 일어나지 않아
        // 클로져와 연관이 있다.
        // 내부에 값이 없으면 상속중인 상위 계층에서 값을 가져온다.
        // react
        

        // let _value;
        // useState(initialValue) {
        //     if(_value === undefined) {
        //         _value = initialValue;
        //     }
        //     const setState = (newValue) => {
        //         _value = newValue;
        //     }
        //     return 
        // }
        // setState 함수는 자신과 함께 반환이 된 변수를 변경 시키는 것이 아니라
        // 이후에 실행될 useState가 반환할 _value를 변경시키고, 컴포넌트 자체를
        // 재 랜더링 시킨다. 즉, 변경된 값을 가져오는 함수는 setState가 아니라
        // useState이다.

        // 버튼 클릭을 5까지
        // 이후 1부터 다시 시작
        let resetNumber;
        if(number >= 5) {
            resetNumber = 1;
        } else {
            resetNumber = number+1;
        }
        setNumber(resetNumber);
    }

    return (
        <div>
            <span>Number : {number}</span>
            <button onClick={onClickHandler}>Click</button>
        </div>
    );
}

export default UseState;