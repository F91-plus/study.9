// https://github.com/css-modules/css-modules
// 3000port
import { useState } from 'react';
import './App.css';
import mockItems from './db/mock.json'
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import ItemConfig from './components/ItemConfig';
import { LocaleProvider, useLocale } from './context/LocaleContext';
import LocaleSelect from './components/LocaleSelect';

function App() {
  const [items, setItems] = useState(mockItems);
  
  const [newItem, setNewItem] = useState([]);

  const handleNewest = () => {
    // 내림차순!

    // step 01
    // ...items는 새로운 주소로 인식하기 때문에 setItems에 업데이트시키면 랜더링이 된다.
    const newestItem = [...items].sort((item1, item2) => item2.createdAt - item1.createdAt);
    setItems(newestItem);

    // var 00
    // const newestItem = items.sort((item1, item2) => item2.createdAt - item1.createdAt);
    // console.log(newestItem);
    // item1은 오브젝트이다(객체) -> 객체.(값)으로 원하는 값을 들고오자!
    // 함수내부에 사용된 값(newestItem)을 사용할려면? -> 새로운useState 객체를 만든어서 반환
    // 하지만 setItems로 사용하면 값은 변하지만 랜더링이 되지 않음 -> 같은 데이터이기 때문이다!
    // 그러면 랜더링을 일으키는 기능을 넣어주어야 하는데 이것은 불필요한 랜더링을 넣어 주어야 한다.
    // 또는 새로운 객체를 만들어서 업데이트 시켜준다.
    // 하지만 불변성으로 선택을 안했는데 화면이 바낀다?! -> sort 함수 자체 특성으로 바뀜...
    // setNewItem(newestItem);
  }

  const handleCalorie = () => {
    const newestItem = [...items].sort((item1, item2) => item2.calorie - item1.calorie);
    setItems(newestItem);
  }

  //버튼 함수기능을 보면 item(N).(이것) 만 다르다 그러면 하나로 합쳐서 이것만 바꿔주면 되지 않을까?
  // 고로 하나로 합치는 방법!
  // var 2
  const handleOrder = (e) => {
    let order = e.target.name
    // const newestItem = [...items].sort((item1, item2) => item2.e.target - item1.e.target); // 안되
    const newestItem = [...items].sort((item1, item2) => item2[order] - item1[order]); // 된다!
    setItems(newestItem);
  }
  
  // var 3
  const [order, setOrder] = useState('');
  // 구분하기 위해서 함수로 사용 아니면 callback 함수로 바로 사용해도 됨
  // onCLick(() => {기능})
  const handleNewest3 = () => setOrder('createdAt');
  const handleCalorie3 = () => setOrder('calorie');
  const orderdItems = items.sort((item1, item2) => item2[order] - item1[order]);

  // 삭제
  // 1. 함수 생성 및 ItemList에 기능 추가
  // 2. Itemlist에서 props 받는 것들 추가
  // 3. 기능 구현
  const handleDelete = (id) => {
    console.log(id)
    // items의 필터에 각각의 item이 받아져 온다. 그리고 조건 설정
    // 완료한 조건이후 랜더링 해주자
    const deletedItems = items.filter((item) => (item.id !== id));
    setItems(deletedItems);
  }

  // 추가
  const handleInsert = (newItem) => {
    // console.log(newItem);
    // 이전의 아이템들에다가 concat으로 추가 또는 배열 자체에서 스프레드로 추가
    setItems((prevItems) => [newItem, ...prevItems]);
  }

  // 수정 상태관리
  const [configToggle, setConfigToggle] = useState(false);
  const onConfigToggle = () => {
      setConfigToggle(!configToggle);
  }

  // 수정
  const handleConfig = () => {

  }

  const [ locale, setLocale ] = useState('kor');

  // context의 범위는 내부에서만 사용이 가능하고 외부에서는 사용이 불가능하다
  // useLocale();


  return (
    // <LocaleContext.Provider value={locale}>
    <LocaleProvider>
      <div>
        <ItemForm 
          onSubmitData = {handleInsert}
        />
        <button name='createdAt' onClick={handleOrder}>최신순</button>
        <button name='calorie' onClick={handleOrder}>칼로리순</button>
        
        <LocaleSelect 
          // value={locale} 
          // onChange={setLocale}
        />

        {/* var 3 */}
        {/* <button onClick={handleOrder}>최신순</button>
        <button onClick={handleOrder}>칼로리순</button> */}
        <ItemList 
          items = {items} // app.js을 통해서 데이터가 받아져옴
          // newestItem={handleNewest}
          // items3 = {orderdItems}
          // props로 전달할때 on~~로 전달하는게 좋다
          onDelete = {handleDelete} // 1 삭제 기능 추가
          // onConfig = {handleConfig}
        />

        {/* {configToggle && <ItemConfig />} */}
      </div>
    </LocaleProvider>
    // </LocaleContext.Provider>
  );
}

export default App;
