import { Outlet, useNavigate } from "react-router-dom";

function Common() {

    const navigator = useNavigate();
    const goBack = () => {
        navigator(-1);
    }
    const go = () => {
        navigator(1);
    }

    return(
        <div>
            <header
                style = {{
                    height: '30px',
                    background: 'aqua'
                }}
            >
                <button onClick={goBack}>앞으로안가고 뒤로가기</button>
                <button onClick={go}>앞</button>

            </header>

            <main>
                <Outlet />
            </main>

            <footer
                style = {{
                    height: '30px',
                    background: 'aqua'
                }}
            ></footer>
        </div>
    )
}

export default Common;