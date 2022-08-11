import React from 'react';
import styled from 'styled-components';

function StyledComponentsSample() {
    // 컴포넌트 안에 스타일을 적용시키는게 아닌
    // css 적용시키면서 컴포넌트를 사용한다. [2번 라인 import]
    // https://styled-components.com/docs/basics#motivation
    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
    `;

        // Create a Wrapper component that'll render a <section> tag with some styles
        const Wrapper = styled.section`
        padding: 4em;
        background: papayawhip;
    `;

    return(
        <Wrapper>
            <Title>
                Hello World!
            </Title>
        </Wrapper>
    )
}

export default StyledComponentsSample;