import React, {useState} from "react";

const fetchAPI = () => {
    return ['권모햄', '경욱햄'];
}

function UseState2() {
    // 초기값 지정 useState
    const [names, setNames] = useState(fetchAPI());
    const [inputValue, setInputValue] = useState('');

    // step01 : 기존의 데이터 map 출력
    // step02 : input에 기입하는 데이터 트래킹

    const onChangeHandler = (e) => {
        // console.log('input 변경');
        // console.log(e.target.value);
        setInputValue(e.target.value);
        // 이벤트 자신을 목표로 한 값?
    }

    const onClickInputValueHandler = () => {
        // console.log('클릭 확인')
        // setNames(() => {names.push(inputValue)});
        // set함수 내부에는 이전 상태값을 가져올 수 있는 변수 존재
        // prev = previousValue
        setNames((prev) => {
            return [...prev, inputValue];
        });
    }

    return (
        <div>
            <input type="text" onChange={onChangeHandler} />
            <button onClick={onClickInputValueHandler}>Click!</button>
            {names.map((name ,index) => {
                // console.log(name);
                return <p key={index}>{name}</p>
            })}
        </div>
    );
}

export default UseState2;