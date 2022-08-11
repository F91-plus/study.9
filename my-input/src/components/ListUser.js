import React from "react";

function ListUser({ users, onDelete }) {
    // console.log(data);
    // let list = data;
    return (
        <div>
            {/* List User */}
            {/* return 해주고 key값 설정하거나 --- return 없이{}를 () 로 바꾸어야한다. */}
            {users.map((user) => (
                // console.log(user);
                <div key={user.id}>
                    <b>{user.name}</b>
                    <b>{user.lastName}</b>
                    &nbsp;
                    <button key={user.id} onClick={() => {onDelete(user.id)}}>del</button>
                </div>
            ))}
        </div>
    );
}

export default ListUser;