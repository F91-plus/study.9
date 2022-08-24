import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

// function Page( {isDark, setIsDark} ) {
function Page() {
    // 사용하는 객체의 컴포넌트 이름을 가지고 온다. -> ThemeContext
    // const themeData = useContext(ThemeContext);
    // console.log(themeData);

    return(
        <div>
            {/* <Header isDark={isDark} />
            <Main isDark={isDark} />
            <Footer isDark={isDark} setIsDark={setIsDark} /> */}

            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Page;