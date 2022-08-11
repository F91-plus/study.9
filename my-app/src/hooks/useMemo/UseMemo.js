import React, { useState, useMemo } from "react";
/*
useMemo 
메모이제이션 Memoization
: 동일값을 반환하는 함수를 반복적으로 호출하는 경우 해당 결과를 메모리(캐시)에 저장하여 사용하는 기능
함수형 컴포넌트가 렌더링 되면서 내부 함수를 계속해서 호출하는 경우가 발생 할 수 있음 
이를 효율적으로 관리 하고자 할때 useMemo 사용할 수 있음

- 구조
const result = useMemo(() => {
    연산 코드;
    return 결과;
})
*/
const heavyWork = (num) => {
    console.log('---heavy work---');
    for(let i = 0; i < 1000000000; i++) {}
    return num + 100000;
}

const lightWork = (num) => {
    console.log('---light work---');
    return num + 10;
}

function UseMemo() {
    const [heavyNum, setHeavyNum] = useState(0);
    const [lightNum, setLightNum] = useState(0);

    // const heavySum = heavyWork(heavyNum);
    const heavySum = useMemo(() => {
        return heavyWork(heavyNum);
    }, [heavyNum]);
    // [] 트래킹 부분, 해당하는 부분이 변경되었을때만 부르는 것
    const lightSum = lightWork(lightNum);

    return (
        <div>
            <div>
                <h1>heavy work(+100000)</h1>
                <input 
                    type="number" 
                    onChange={(e) => {setHeavyNum(parseInt(e.target.value))}}></input>
                <span> + 100000 = {heavySum}</span>
            </div>
            <div>
                <h1>light work(+10)</h1>
                <input 
                    type="number" 
                    onChange={(e) => {setLightNum(parseInt(e.target.value))}}></input>
                <span> + 10 = {lightSum}</span>
            </div>
        </div>
    );
}

export default UseMemo;
