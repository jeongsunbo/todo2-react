import React from 'react';

const CreateTodo = ({ onChange, text, onCreate }) => {
    return (
        <div>
            {/* todolist상단영역 */}
            <h2>to do list</h2>
            <div>
                {/* 인풋에 입력될때 onChange 
                onChange={(e)=>{console.log(e.target.value)} 입력될떄 뭐가 적히는지 확인 이값을 App에서 관리
                */}
                <input type="text" value={text} name="list" onChange={onChange}/>
                {/* onClick할때 onCreate를 함 */}
                <button onClick={onCreate}>+</button>
            </div>
        </div>
    );
};

export default CreateTodo;