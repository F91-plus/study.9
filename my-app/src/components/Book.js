import React from "react";

function Book({bookName, bookPrice}) {
    // props를 해주지 않으면 아래가 정의되지 않음, 즉 값을 전달 해준다
    return (
        <div>
            <h1>{`책 이름 : ${bookName}`}</h1>
            <h1>{`책 가격 : ${bookPrice}`}</h1>
        </div>
    );
}

export default Book;