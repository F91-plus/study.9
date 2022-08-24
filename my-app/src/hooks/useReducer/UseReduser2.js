import React, {useState, useReducer, useRef} from 'react'

const ACTION_TYPES = {
    add: 'add',
    delete: 'delete',
    update: 'update'
}

const reducer = (state, action) => {
    // console.log(state);
    switch (action.type) {
        case ACTION_TYPES.add:
            // step01 새로운 객체 만들기
            const newItem = {
                id: (action.id.currentId.current += 1),
                name: action.name.name
            };
            // console.log(newItem); 확인
            return {
                count: state.count + 1,
                lists: [...state.lists, newItem]
            }
        case ACTION_TYPES.delete:
            const delItem = state.lists.filter(() => (state.lists !== action.name));
            
            return delItem;
        default:
            return state;
    }
}

const initialList = {
    count: 1,
    lists: [
        {
            id: 1,
            name: 'ramen'
        }
    ]
}

function UseReduser2() {
    const [name, setName] = useState('');

    const [finalList, dispatch] = useReducer(reducer, initialList);

    const currentId = useRef(1);

    return (
        <div>
            <h2>물품 리스트</h2>
            {process.env.REACT_APP_TEST}
            <p>총 물품수 :  {finalList.count}개</p>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
            ></input>

            <button onClick={() => {
                dispatch({ type:'add', id: {currentId}, name: {name} });
            }}>추가</button>
            <button onClick={() => {
                dispatch({ type:'delete', name: {name} });
            }}>삭제</button>

            {finalList.lists.map((list) => {
                return (
                    <div>{list.name}</div>
                )
            })}
        </div>
    )
}

export default UseReduser2;

/*

*/