import React, { useState } from "react";

function Controll() {
    const [name, setName] = useState('');
    const handleChange = (e) => {
        setName(e.target.value);
        // 이벤트라는 객체가 타겟의 값을 업데이트
    }
    const handleSubmit = (e) => {
        alert(name);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name : 
                    <input type="text" value={name} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>

                <hr />
                
                <label>
                    Text : 
                    <textarea type="text" value={name} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Controll;