import React from "react"

// props 전달 받기
function InputUser({name, lastName, onChange, onAdd}) {
    return (
        <div>
            <input
                name="name"
                placeholder="name"
                onChange={onChange}
                value={name} // value 는 readonly이다. 고로 같이 써주거나 //변환 값을 받아오는 것 = defaultvalue
            />
            <input
                name="lastName"
                placeholder="lastName"
                onChange={onChange}
                value={lastName}
            />
            <button onClick={onAdd}>Add</button>
        </div>
    )
}

export default InputUser;