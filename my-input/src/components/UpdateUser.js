import React, { useEffect, useState } from "react";

// 비구조화 풀어서 객체화 시켜주자
function UpdateUser({ selectedUser, onUpdate }) {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);   // value에게 값이 들어간다 = 업데이트 된다 = 변경된 값이 들어가야된다
    }
    // 초기에 edit 버튼 클릭시,
    // 이름정보 수정의 input value는
    // 클릭한 객체의 이름이 출력되어야 한다.
    // 어떻게 해야 출력할 수 있을까?
    // (== 초기값 지정하는 방법! hist : useEffect)
    useEffect(() => {
        setValue(selectedUser.name);
    }, [])
    // 수정할 값의 name을 보여주는 상태에서 수정화면이 나온다.
    // 다음으로 수정확인을 누르면 값을 전달해주는 기능 완료하자

    const onSubmit = (e) => {
        // console.log('UpdateUser - onSubmit'); // 연결 확인
        // step01 : submit 시 전달해야하는 데이터는 무엇일까?
        // 1) 수정하고자 하는 정보 : value 변수가 가지고 있음 --> 가상의 db전달
        // 2) 수정하고자 하는 대상(객체) 정보 : id(selectedUser.id)
        
        // onUpdate(); // App.js에있는 '확인' 연결 확인
        onUpdate(selectedUser.id, value) // 어떤 것을 선택해서, 어떤 값을 넣을건지?
        e.preventDefault(); //form 기본 특성이 화면 새로고침이다. 그 특성을 멈춘다
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h3>이름 정보 수정</h3>
                <input type="text" value={value} onChange={onChange}/>
                <button type="submit">modify</button>
            </form>
        </div>
    )
}

export default UpdateUser;