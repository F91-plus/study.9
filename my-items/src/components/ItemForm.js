import React, { useState } from 'react';
import FileInput from './FileInput';

function ItemForm ( {onSubmitData} ) {
    // const [title, setTitle] = useState('');
    // const [calorie, setCalorie] = useState(0);
    // const [content, setContent] =  useState('');

    // const onTitleChange = (e) => setTitle(e.target.value);
    // const onContentChange = (e) => setContent(e.target.value);
    // const onCalorieChange = (e) => setCalorie(e.target.value);
    // 위의 코드를 아래로 합침!
    const [ value, setValue ] = useState({
        title: '',
        calorie: 0,
        content: '',
        imgFile: null
    });
    // console.log(`title : ${title}, calorie : ${calorie}, content : ${content}`)
    
    const handleInputChange = (e) => {
        // 여기서의 name은 input의 type,name,onCange.. value는 해당 name의 값
        const { name, value, type } = e.target;
        handleValueChange(name, convertNumber(type, value));
        // 칼로리 숫자로 변경해줌
    }

    const handleValueChange = (name, value) => {
        setValue((previousValue) => ({
            ...previousValue,
            [name] : value
            // [name] : convertNumber(type, value)
        }));
    }
    

    function convertNumber(type, value) {
        // 칼로리를 숫자로 변경 - 기능 ==> 함수화!!
        switch (type) {
            case 'number':
                return Number(value) || 0;

            default:
                return value;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(value);
        value.createdAt = Date.now();

        onSubmitData(value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <FileInput type="text" name="imgFile" value={value.imgFile} onChange={handleValueChange} />
            <input type="text" name="title" value={value.title} onChange={handleInputChange} />
            <input type="number" name="calorie" value={value.calorie} onChange={handleInputChange} />
            <input name="content" value={value.content} onChange={handleInputChange} />
            <button type="submit">추가</button>
        </form>
    )
}

export default ItemForm;