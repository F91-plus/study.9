import React, { useEffect, useState } from "react";

function Storage() {
    // api-test
    fetch('https://f91-plus.github.io/data/data.json')
        .then(response => response.json())
        .then(data => console.log(data))

    // name useState
    const [name, setName] = useState('');
    // 값을 출력하기 위한 배열 객체
    const [result, setResult] = useState([]);

    const onChange = (e) => {
        setName(e.target.value); // 업데이트 해줄 수 있도록 설정
        setResult([]);
    }
    
    // 초기값 출력 ? --> useEffect
    useEffect(() => {
        loadName();
    }, [name]);

    const saveName = (e) => {
        // JSON 문자열 형태로 값을 저장
        // "name": {name: name}
        const user = {name: name}
        window.localStorage.setItem(name, JSON.stringify(user));
    }
    const loadName = () => {
        // JSON 문자열 -> JSON.parse
        // key : value
        for(let i=0; i<window.localStorage.length; i++) {
            let key = window.localStorage.key(i); // 여러 값이 들어올수 있으니 지정하고
            const value = window.localStorage.getItem(key);
            // console.log(key);
            // console.log(value); //string 이다 -> 객체로 바꾸자! objcet.name 프로퍼티의 값을 가져오자
            // console.log(typeof JSON.parse(value)); // object 확인
            if(JSON.parse(value).name === name) {
                // setResult(result.concat({key, value}));      // 
                // setResult(result.push({key, value}));        // 오류가 난다..
            }
        }
        console.log(result);
    }

    return (
        <div>
            <input
                name="userName"
                placeholder="이름을 입력하세요!"
                onChange={onChange}
            />
            <button onClick={saveName}>저장하기</button>
            <button onClick={loadName}> 불러오기</button>

            {/* 출력 로직 */}
            {result.map((data) => (
                <p key={data.key}>{data.key} === {data.value}</p>
            ))}
        </div>
    );
}

export default Storage;