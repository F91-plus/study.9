import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext';

// function Footer( { isDark, setIsDark } ) {
function Footer() {
    const { isDark, setIsDark } = useContext(ThemeContext);
     
    const changeTheme = () => {
        setIsDark(!isDark);
    }
    return(
        <footer style={{
            backgroundColor: 'lightgray',
            color: 'balck'
        }}>
            
            <button
                onClick={changeTheme}
            >Mode</button>
        </footer>
    )
}

export default Footer;