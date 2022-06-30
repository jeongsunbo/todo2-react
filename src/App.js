import './App.css';
import { useReducer, useRef } from 'react'; //useState를 쓴다고 해야함
import TodoLists from './components/TodoLists';
import CreateTodo from './components/CreateTodo';
const initialState = {
    text:"",
    todos: [
        {
            id: 1,
            todotext: "리액트 공부하기",
            isDone:false,
        },
        {
            id: 2,
            todotext: "타입스크립트 공부하기",
            isDone:false,
        },
        {
            id: 3,
            todotext: "공부하기",
            isDone:false,
        },
    ]
}
function reducer(state, action){
    switch(action.type){
        case "CHANGE_INPUT":
        return {
            ...state,
            text: action.text //얘가 데이터를 전달
        };
        case "CREATE_TODO":
        return {
            text:"", //인풋에 값을 비워줌
            todos: state.todos.concat(action.todo)
        };
        case "DELETE_TODO":
        return {
            ...state,
            todos: state.todos.filter(todo=> todo.id !== action.id)
        };
        case "ISDONE_TODO":
        return {
            ...state,
            todos: state.todos.map(todo=>
                todo.id === action.id ? {...todo, isDone : !todo.isDone} : todo)
        }
        default:
        return state;
    }
}
function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { todos, text } = state;
  const onChange = (e) => {
    dispatch({
        type: "CHANGE_INPUT",
        text: e.target.value,
    })
    console.log(text);
  }
  const nextId = useRef(4);
  const onCreate = () => {
    dispatch({
        type: "CREATE_TODO",
        todo: {
            id: nextId.current,
            todotext: text,
            isDone: false,
        }
    })
    nextId.current ++;
  }
 
  const onDelete = (id) => {
    dispatch({
        type: "DELETE_TODO",
        id: id,
    })
  }
  // 리스트 클리시 토글 붙는것
  const onToggle = (id) => {
    dispatch({
        type: "ISDONE_TODO",
        id: id,
    })
  }
  return (
    <div className="App">
      {/* todos={todos}는 props인데 TodoList여기 컴포넌트의 자식요소props로 받음 */}
      <CreateTodo text={text} onChange={onChange} onCreate={onCreate}/>
      <TodoLists todos={todos} onDelete={onDelete} onToggle={onToggle}/>
    </div>
  );
}

export default App;
