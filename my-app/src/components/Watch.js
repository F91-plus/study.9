import React from "react";

function Watch() {
    return ( // return 이 JSX 형식
        <div>
            <h1>Hello, React</h1>
            {/* {}로 JS처럼 사용한다. */}
            <h3>NOW TIME: {new Date().toLocaleTimeString()}</h3>
        </div>
    );
}

export default Watch;