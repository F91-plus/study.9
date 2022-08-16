import React, { useEffect, useState } from "react";
import { useRef } from 'react';

function FileInput( { name, value, onChange } ) {

    const inputRef = useRef();
    // console.log(inputRef.current);

    const handleFileChange = (e) => {
        console.log(e.target.files[0]) // 어떤 정보가 오는지 확인, 하나만 들고올것 -> [0], 
        const file = e.target.files[0];
        onChange(name, file);
    }

    const handleClearFile = () => {
        inputRef.current.value = '';
        onChange(name, null);
    }

    // value가 업데이트 되면... 작동
    const [preView, setPreView] = useState();

    useEffect(() => {
        // null = true 경우 바로 반환 -> 오류 방어, 있으면 false로 실행
        if(!value) return;
        const nextPreView = URL.createObjectURL(value);
        setPreView(nextPreView);

        return() => {
            setPreView();
            URL.revokeObjectURL(nextPreView);
        }
    }, [value]);

    return (
        <div>
            { preView && <img src={preView} alt="preview" /> }
            <input 
                type="file"
                onChange={handleFileChange}
                ref={inputRef}
            />
            <button 
                type="button"
                onClick={handleClearFile}>
                OX
            </button>
        </div>
    );
}

export default FileInput;