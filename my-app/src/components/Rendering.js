import React, { useState } from "react";

function Rendering() {
    const [isLogin, setIsLogin] = useState(false);

    let db = [
        // {
        //     id:1
        // },
        // {
        //     id:2
        // },
        // {
        //     id:3
        // }
    ];

    let button;
    if(isLogin) {
        button = <button>logout</button>;
    } else {
        button = <button>login</button>;
    }

    return (
        <div>
            {/* 조건부 렌더링 */}
            {/* truthy/falsy */}
            {db.length === 0 ? 
                ('null')
                :
                db.map((data) => 
                <p>{data.id}</p>
            )}

            {/* 삼항 연산자 */}
            {/* true=logout : false=login */}
            {/* {isLogin ? 'logout' : 'login'}  */}
            
        </div>
    );
}

export default Rendering;