import React, {useState, useReducer} from 'react'

// state를 생성하고 관리하는 Hook
// reducer : state 업데이트
// dispatch : state 업데이트 변경 요구
// action : 요구 내용

// ex
// 나 - 주식 거래 - 거래처
// 내가 거래처를 통해 주식거래를 할 때 거래내역(state) 변경 혹은 관리는 거래처가 담당
// dispatch : 나
// action : 매수 / 매도
// reducer : 거래처

// dispatch(action) -> reducer(state, action) -> 상태 업데이트

const ACTION_TYPES = {
    buy: 'buy',
    sell: 'sell'
}

const reducer = (state, action) => {
    // dispatch랑 연결시켜야 한다.
    console.log('---reducer 연결 확인');
    console.log(state, action);

    // 매수 : 초기상태 + action.number
    // return state + action.stock

    // 매도
    switch (action.type) {
        case ACTION_TYPES.buy:
            return state + action.stock
            break;
        case ACTION_TYPES.sell:
            return state - action.stock
        default:
            return state;
            break;
    }
}

function UseReduser() {
    const [number, setNumber] = useState(0);

    const [balance, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h2>주식 거래</h2>
            <p>잔액 정보 : {balance}원</p>
            <input
                type="number"
                onChange={(e) => {setNumber(Number(e.target.value))}}
                step="1000" // 1000단위로 바뀜
            ></input>

            <button onClick={() => {
                dispatch({type:ACTION_TYPES.buy, stock: number});// reduce한테 넘겨줄 값들
            }}>매수</button>
            <button onClick={() => {
                dispatch({type:ACTION_TYPES.sell, stock: number});
            }} >매도</button>
        </div>
    )
}

export default UseReduser;

/*
    자~ 정리
    주식의 매수, 매도 기능을 만든다
    값 입력란에는 숫자만 들어오며, 단위는 1천 단위로 증가 및 감소한다
    값을 전달해야 하니 값은 useState로 설정했고 초기값은 0으로 되어있다.
    또한 문자를 숫자형으로 바꿔주기 위해서 Number로 묶었다.
    저장되는 곳을 useReduce로 업데이트 요청을 해서 값 을 바꿔주며 해당되는 값을 계속 받아준다
    매수는 클릭시 현재 입력 값에 대해서 추가적으로 저장된 값에 변경을 시켜주어야 한다 -> dispatch
    매수의 타입은 사야 하는 것이니 buy로 주고 // 돈으로 사는 것이니 숫자로 준다.

    해당 버튼의 조건에 맞게 더하고 빼야하는데 어떻게 조건을?
    switch 로 해보자
*/