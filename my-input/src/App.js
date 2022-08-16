import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import { axiosData, fetchData } from './api/getUsers';
import Input from './components/Input';
import InputUser from './components/InputUser';
import ListUser from './components/ListUser';
import Storage from './components/Storage';
// import data from './db/mock.json';
import axios from 'axios';
import UpdateUser from './components/UpdateUser';

function App() {
  // data
  useEffect(() => {
    // fetchData
    const data = fetchData();
    data
      .then(response => response.json())
      .then(data => setUsers(data))

    // axiosData
    // const data = axiosData();
    // data
    //   .then(response => setUsers(response.data))
  }, []);

  const [inputs, setInputs] = useState({
      name: '',
      lastName: ''
  });
  // inputs 객체
  const { name, lastName } = inputs;
  // console.log(name,lastName);
  // const nameInput = useRef();

  // inputs 객체들을 관리 할 수 있는 배열 객체
  const [users, setUsers] = useState([]); // data = 유저들의 정보를 담고 있음

  const onChange = (e) => {
      const { name, value } = e.target;

      setInputs({
        ...inputs,
        [name]: value
      });
  }

  //하나하나 지정이 불가능하니 관리해주는 상태를 지정해주자 nextId
  // const [nextId, setNextId] = useState(3); // State... 랜더링이 되서 App.js가 초기화가 되고 값을 추가를 해주어도 초기 값만 나온다.
  const nextId = useRef(3); // State... 랜더링이 되서 App.js가 초기화가 되고 값을 추가를 해주어도 초기 값만 나온다.

  const onAdd = () => {
    console.log("onAdd : " + name, lastName);
    // push를 주면 이전 값이랑 현재 값이 다른 무슨 오류...
    // 배열에 새로운 값 넣을때 push 가아닌 아래와 같이 만든다
    const newUser = { // input에 새롭게 작성된 정보를 바탕으로 생성된 객체
      id: nextId.current, //ref는 값까지 접근해야한다.
      name: name,
      lastName: lastName
    };
    // 새로운 객체를 기존 데이터에 추가
    // setUsers([...users, newUser]); // setUsers가 업데이트 되야한다.
    setUsers(users.concat(newUser)); // 배열이라서 concat 사용할 수 있다.
    nextId.current += 1;

    // 기존 inputs를 모두 초기화 하는 로직
    setInputs({
      name: '',
      lastName: ''
    });
  }

  // 삭제
  const onDelete = (id) => {
    // console.log('deldel'); // 연결확인이잉
    // 삭제 -> setUsers(삭제된 객체 정보)
    // 로직 - users 객체에서 내가 클릭한 객체 정보를 활용
    // 만약에 내가 클릭한 객체의 정보가 맞다면?!
    // users 객체에서 삭제 (배열에서 해당 객체를 삭제)
    // 삭제 후 최종적으로 users 상태를 갱신

    // 조건 = find, findIndex, splice
    // splice 사용해서 지우는데 효율적이지 않음! 고로 filter를 사용하자
    // const findUser = users.find((user) => {
    //   return user.id === id;
    // });
    // const index = users.indexOf(findUser);
    // users.splice(index, 1);

    setUsers(users.filter((user) => (user.id !== id))); // 유저 id !== del의 id
  }

  // 수정 - 상태관리
  const [updateToggle, setUpdateToggle] = useState(false);
  // setUpdateToggle 을 listuser에게 전달, listuser 에서 상태변경후 app.js 에게까지 돌려준다.
  // 수정 - toggle 상태를 변경 함수
  const onUpdateToggle = () => {
    // console.log('App.js : update toggle'); // 확인
    setUpdateToggle(!updateToggle);
  }
  // 수정 - edit 버튼 클릭시 UpdateUser에 클릭한 user정보(이름)을 관리하는 state
  const [selectedUser, setSelectedUser] = useState(null); // 객체로 초기값 시작! null 이 객체인듯!
  // 수정 - 선택한 user의 상태를 변경 함수 ()
  const onSelectUser = (user) => {
    // 콘솔로 listuser에서 넘어오는지 확인
    // console.log(user); // 넘어온다.
    setSelectedUser(user); // 그러면 업데이트 시켜주자
    // 이 업데이트된 정보를 그러면 넘겨주자 선택유저한테
  }

  // 수정 - 실제 수정이 일어나는 기능
  const onUpdate = (userId, newName) => {
    // console.log('확인');
    console.log(`${userId} - ${newName} 확인`);

    // 실제 수정 로직
    // 1) 수정 완료 버튼 누르면 수정화면(UpdateUser)이 사라져야 한다.
    // 2) 업데이트 
    // 2-1) 현재 전체의 출력 데이터가 저장되는 객체  -> users
    // 2-2) 전체 출력 객체에서 파라미터로 넘겨져온 userId와 
    //      전체 출력 객체 내부에 있는 특정 객체의 id값이 같은지 조건
    //      -> 배열이다! 고로 배열에서 특정 조건 --- 반복(map) + 조건(삼항 연산자)
    //         userId === id ? {newName 객체} : {본인의 객체}
    // 2-3) 위의 조건으로 두 값이 같다면 특정 객체의 name이
    //      파라미터로 넘겨져온 newName으로 대체가 된다.
    // 2-4) 업데이트 하자
    setUpdateToggle(!updateToggle);
    
    // for(let i=0; i<)
    
    // setUsers()

  }

  return (
    // step01
    // <Input />

    // step02
    // JSX 문법 맞춰야해서 최상위로 묶어야 한드아..
    <div>
      <InputUser 
      // props 전달
        name={name}
        lastName={lastName}
        onChange={onChange}
        onAdd={onAdd}
      />

      <ListUser 
        users={users}
        onDelete={onDelete} 
        onUpdateToggle={onUpdateToggle}
        onSelectUser={onSelectUser}
      />
      {/* user로 바로 보내주지않고 selectUser로 새로 만들어서 listUser에서 보내주고 받아오고 보내준다. */}
      {updateToggle && <UpdateUser selectedUser={selectedUser} onUpdate={onUpdate}/>}
      
      {/* <Storage /> */}
    </div>
  );
}

export default App;
