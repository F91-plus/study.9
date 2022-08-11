import React, { useRef, useState } from 'react';

function Input () {
    const [inputs, setInputs] = useState({
        // 일반 숫자, 문자열, 배열 아닌 객체를 준다!
        name: '',
        lastName: '', // 새로 만드는 것이 아닌 각각의 객체를 할당하고 관리한다! 개수만큼 State를 만드는 것은 비효율적이다.
    });
    // const [inputs2, setInputs2] = useState({lastname});

    const nameInput = useRef(); // 초점

    // 비구조화 할당 1
    const { name, lastName } = inputs; // inputs.name으로 사용하는것을 name으로 사용할 수 있다.
    // console.log(name);

    const onChange = (e) => {
        // 비구조화 할당2
        // console.log(e.target);
        const { name, value } = e.target;

        // console.log(e.target.value);
        setInputs({ // e.target.valule 를 name에 넣기 -> 객체 사용
            // name: e.target.value  // 첫번째 방법
            ...inputs,  // 이전 값과 합침
            [name]: value
        });
    }

    const onReset = () => {
        setInputs({
            name: ''    // inputs-name 만 초기화 된다.
        });
        nameInput.current.focus();
    }

    return (
        <div>
            <input
                name="name"
                placeholder="name"
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input
                name="lastName"
                placeholder="lastName"
                onChange={onChange}
                value={lastName}
            />
        <button onClick={onReset}>Reset</button>
        <div>
            <b>NAME: </b>
            {inputs.name}
            <b>LASTNAME: </b>
            {inputs.lastName}
        </div>
        </div>
    );
}

export default Input;