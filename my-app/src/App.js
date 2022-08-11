import logo from './logo.svg';
import './App.css';
import Hello from './Hello'; // 3. 모듈화된 Hello.js import (1,2는 Hello.js 에 있음)
import Watch from './components/Watch';
import Library from './components/Library';
import Comments from './components/Comments';
import Notice from './components/Notice';
import UseState from './hooks/useState/UseState';
import UseState2 from './hooks/useState/UseState2';
import UseState3 from './hooks/useState/UseState3';
import UseEffect from './hooks/useEffect/UseEffect';
import UseEffect2 from './hooks/useEffect/UseEffect2';
import UseRef from './hooks/useRef/UseRef';
import UseRef2 from './hooks/useRef/UseRef2';
import UseMemo from './hooks/useMemo/UseMemo';
import UseCallback from './hooks/useCallback/UseCallback';
import View from './components/View';
import Rendering from './components/Rendering';
import Controll from './components/Controll';
import Parent from './components/Parent';
import Child from './components/Child';
import AAA from './components/AAA';
import { useState } from 'react';

function App() {

  const [showWork, setShowWork] = useState(false);

  // JSX 4. style
  const color = {
    color: 'red'
  }

  // JSX 5. 변수 사용
  const name = "it";

  return (    
    // <div className="App">
    //   {/*<header className="App-header">
    //     <h1>hello, react</h1>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   */}

    //   {/* 4. Hello.js 컴포넌트를 사용 */}
    //   {/* 모듈로 만들어 주어야 사용가능하다 -> export*/}
    //   <Hello />
      
    // </div>

    // step 02
    // (empty) fragment
    // {} 안에는 객체로 인식한다., 자바스크립트 객체는 retrun 위에다 만들어 준다.

    // <div style={color} className="hello">
    //   <Hello />
    //   {/* <Hello>TEST</Hello> test출력안됨*/}
    //   {/* 컴포넌트 안에는 값을 넣어도 출력이 안된다. */}
    //   <Hello>{name}</Hello>
    //   <div>{name}</div>
    // </div>

    //<></> JSX 형태

    // 리액트 엘리먼트
    // <Watch />
    
    // ex1 : 도서관
    // 리액트 컴포넌트와 Props
    // 여러개 사용하면 컴포넌트 합성이라고 한다.
    // 컴포넌트 합성 : 여러개의 컴포넌트를 합쳐 새로운 컴포넌트를 만드는 것    
    // ver1
    // <>
    //   <Library bookName="React1 실습" bookPrice={15000} />
    //   <Library bookName="React2 실습" bookPrice={20000} />
    //   <Library bookName="React3 실습" bookPrice={25000} />
    // </>
    // 컴포넌트 추출 : 복잡한 컴포넌트를 쪼개어 단위별의 컴포넌트를 만드는 것

    // ver2 : Libaray는 하나고 Book이 3개이다.
    // Library.js 에서 책 3개를 만들어주고 props값을 지정해 준다. (ver4 확인)
    // 도서관 하나에 책을 여러번 호출해주는 형태이다.
    // <Library />

    // ex2 : 댓글(Comments)
    // <div>
    //   <Comments />
      // <Notice />
    // </div>

    // Hooks
    // useState
    // <UseState />
    // <UseState2 />
    // <UseState3 />

    // <UseEffect />
    // <div>
    //   {/* false => 컴포넌트가 출력이 안됨 */}
    //   {/* 상태 변화값으 주자 */}
    //   {showWork && <UseEffect2 />}
    //   <button onClick={()=>{setShowWork(!showWork)}}>Click!@!@</button>
    //   {/* showWork 값 변경 -> const의 showWork 값 갱신 -> showWork && <~> 에 적용 */}
    // </div>
    
    // <UseRef />
    // <UseRef2 />

    // <UseMemo />
    // <UseCallback />

    // children
    // 나중에 View 하나에 여러가지 컴포넌트가 들어간다.
    // <View>
    //   <Hello />
    //   <Hello />
    //   <Hello />
    // </View>

    // <Rendering />
    // <Controll />
    // <Parent />
    <AAA />
  );
}

export default App;