# React 사용 용어 정리
##### https://ko.reactjs.org/react [문법...?]
##### https://speakerdeck.com/vjeux/react-css-in-js?slide=4 [React:CSS in JS 문제점]

## React JSX 기본 골격
>   import React from "react";
>   function KK() {
>   >   return ();
>   }
>   export default KK;

1. KK.js 컴포넌트 생성
2. export 로 컴포넌트를 모듈화
3. App.js 에 KK.js import
4. JSX styel 적용방법 const color = {color:'red'}
5. JSX 변수 사용 const name ="it";
6. 그 외 골격은 Hello.js 참조

## React 구성
* App.js 에서는 필요js 만부름
* ex) 도서관.js 한번만 부르고 그 안의 책은 도서관.js에서 책.js를 import해서 사용, (더 추가 가능 책의 정보...)
* {} 안에는 객체로 인식하며, 자바스크립트 객체는 retrun 위에다 만들어 준다.

## React element
1. function Library(props) {return()}
 * props 객체 이용
2. function Library({bookName, bookPrice}) {return()}
 * JS 에서의 비구조화 할당 이용
3. Parent.js (child), child.js (props)
 * 부모와 자식으로 객체 이용
 * child A={A'}, setA={setA'}

## Hook
* UseState, UseEffect, UseRef, UseMemo, UseCallback
* import React 옆에 해당하는 hook 추가해주어야 한다.

## useState
1. import React, { useState } from "react";
 * import에 useState 추가해준다.
2. const [state, setState] = useState(초기값)
 * A = state, B = setState, C = 초기값(함수나 값)
3. set 함수는 use가 들고온 값으로 변경시키고, 컴포넌트 자체 랜더링, use가 변경된 값을 가져온다.
4. 예시
 * const [number, setNumber] = useState(0);
 * const onClickHandler = () => {return()}
 * setNames((prev) => {return[...prev, inputValue];});
 * const minus = () => {setNumber(number -1);}
 * button onClick={onClickHandler} Click button
 * input type="text" onChange={onChangeHandler}

## useEffect
* 구조
1. 렌더링 될때 마다 실행
>   useEffect(() => {
>   >   수행코드
>   });

2. 특정 값이 변할때만 실행
>   useEffect(() => {
>   >   수행코드
>   }, [변수]);

3. 마운팅시 딱 한번만 실행
>   useEffect(() => {
>   >   수행코드
>   }, []);

4. 언마운팅시 등록된 기능을 해제할때 실행
>   useEffect(() => {
>   >   수행코드;
>   >   return () => {
>   >   >   종료하고자 하는 수행코드;
>   >   }
>   }, []);

5. 예시
 * setInterval - 계속해서 주기적으로 실행한다.

## useRef 
* 특정 컴포넌트에 접근할 수 있는 객체
1. 구조
 * const ref = useRef(초기값);
 * {current: 초기값}

2. 기능
 * 컴포넌트가 언마운팅 될때까지 컴포넌트의 정보를 유지

3. 실제 사용
 * 데이터 저장 공간
 * DOM 요소에 접근

4. 주의사항
 * 내부적으로는 기능 수행이 되고 있으나, 업데이터 된 값이 화면에 출력되지 않음! 이유는 ref 수행 결과로 렌더링이 일어나지 않기 때문이다.랜더링이 일어난다는 것은 프로그램 자체에 부담을 줄 수 있다. 따라서 ref는 렌더링이 자주 일어나지 않아야 하는 상황에 사용하자

## useMemo, useCallback
* 메모이제이션 Memoization : 동일값을 반환하는 함수를 반복적으로 호출하는 경우 해당 결과를 메모리(캐시)에 저장하여 사용하는 기능
함수형 컴포넌트가 렌더링 되면서 내부 함수를 계속해서 호출하는 경우가 발생 할 수 있음,
이를 효율적으로 관리 하고자 할때 useMemo/useCallback 사용할 수 있음
1. 구조
 * useMemo
>   const result = useMemo(() => {
>   > 연산 코드;
>   > return 결과;
>    })

2. useCallback
>   const result = useCallback(() => {
>   > 연산 코드;
>   > return function();
>   })

* 주의해서 사용해야 함 : 메모리를 계속해서 사용하기 때문에 불필요한 값이나 함수가 메모리를 차지 하지 않도록 지정해야 함!

## 훅의 규칙 Hook's Rules
1. 함수형 컴포넌트에서만 사용 가능하다.
2. 최상위 레벨에서만(조건/반복x) 사용 가능하다.

## 조건부 렌더링
* 조건에 따른 렌더링

## Controll
* 제어 컴포넌트 vs 비제어 컴포넌트
 * 제어 컴포넌트
  * 사용자가 입력한 값에 접근하고 제어 할 수 있도록 지정한 컴포넌트
  * HTML input, select, textarea
  * HTML 자체에서 state 관리가 됨 (위 태그들은 내부에 state를 갖고 있음) --> JS 로 접근이 쉽지 않음
>   <input value={stateValue}></input>

## PropDrilling
* 상위 컴포넌트에서 하위 컴포넌트로 props를 전달해주는 방법
## state 공유하기
* 상위컴포넌트에 있는 state를 하위 컴포넌트로 전달하여 데이터를 공유하는 방법
## state 끌어올리기
* 하위컴포넌트에 있는 state를 상위 컴포넌트로 전달하여 데이터를 공유하는 방법

# 예시
...
