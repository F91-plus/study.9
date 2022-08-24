import './App.css';
import { Routes, Route } from 'react-router-dom';
import { About, Contact, Events, Home, Products, Product, Service, History, Location } from './page';
import Error from './Error';
import Common from './Common';

// https://reactrouter.com/
/*
  my-router
  1. npm install react-router-dom 설치 해당 폴더 내에서
  2. index.js에서 BrowserRouter import 및 App 둘러싸기
  3. 작업 시작
  4. Routes, Route
*/

function App() {
  return (
    <div> 
      <Routes>
        <Route element={<Common />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}>
            <Route path=':service' element={<Service />} />
            <Route path=':history' element={<History />} />
            <Route path=':location' element={<Location />} />
          </Route>
          <Route path='events' element={<Events />} />

          {/* 쿼리스트링 : http://localhost:3000/products?productId=1 */}
          <Route path='/products' element={<Products />}>
            <Route path='*' element={<Products />} />
          {/* URL 파라미터 http://localhost:3000/products/1 */}
          {/* <Route path='/products/:productId' element={<Products />}> */}
            {/* <Route path=':productId' element={<Product1 />} />
            <Route path='2' element={<Product2 />} /> */}
          </Route>

          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
