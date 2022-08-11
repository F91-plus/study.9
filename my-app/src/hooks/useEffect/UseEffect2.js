import React, { useEffect, useState } from "react";

function UseEffect2 () {


    useEffect(() => {
        console.log('useEffect');
        // setInterval - 계속해서 주기적으로 실행한다.
        const intervalWork = setInterval(() => {
            console.log("1초마다 실행됨, intervalwork");
        }, 1000);
        // return은 컴포넌트가 unmounting 될 때 실행
        // 이 함수가 값을 반환하고 종료
        return() => {
            clearInterval(intervalWork);
        }
    }, []) // useEffect는 한번만 실행되는데... interval은 계속 실행된다.
    return (
        <div>
            <span>확인</span>
        </div>
    )
}

export default UseEffect2