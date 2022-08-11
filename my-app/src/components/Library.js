import React from "react";
import Book from "./Book";

// 방법1 : function Library(props) {    
// 방법2 : function Library({bookName, bookPrice}) {
function Library({bookName, bookPrice}) {    
    // ver1 props 객체 이용
    // console.log(props);

    // ver2 자바스크립에서의 비구조화 할당 이용 및 price 가 red로 출력
    // const {bookName, bookPrice} = props;
    // 이렇게 하거나 Library 함수에 props대신 bookName, bookPrice 넣어서 사용
    const color = {
        color: 'red'
    }

    // ver3 props를 사용하지 않고 화면에 결과 출력 --> 확장하여 사용
    // {children}

    // ver4 책 3개를 출력

    return (
        <div>
            {/* ver1 : props.bookName */}
            {/* ver2 : bookName */}
            {/* <h1>{`책 이름 : ${bookName}`}</h1>
            <h1>{`책 가격 : ${bookPrice}`}</h1> */}
            {/* ver4 : 컴포넌트 추출 : BOOK 컴포넌트를 만드는 과정 */}
            {/* <Book bookName="React1 실습" bookPrice={15000} />
            <Book bookName="React2 실습" bookPrice={20000} />
            <Book bookName="React3 실습" bookPrice={25000} /> */}
        </div>
    );
}

export default Library;