import './App.css';
import { useState, useRef } from 'react'; //useState를 쓴다고 해야함
import TodoLists from './components/TodoLists';
import CreateTodo from './components/CreateTodo';

function App() {
  const [ list, setList ] = useState('');
  // 인풋에 입력될때 (input의 value가 변경될때)
  // onChange 함수를 실행
  // state인 list값을 input의 value값으로 업데이트
  const onChange = (e) => {
    const { value } = e.target; //e.target 인풋
    setList(value); //setList로 value값을 받아옴 
    console.log(e.target.value); //확인
  }
  //CreateTodo 컴포넌트에서 +버튼을 클릭하면 
  // todos배열에 할 일 객체가 추가됨
  const onCreate = () => {
    const listobj = {
      id:nextId.current,
      list:list,
      isDone: false,
      active: false,
    }
    settodos([...todos,listobj]); //추가
    nextId.current += 1;
    // 입력하고 +누르면 인풋 비우기
    setList('');
  }
  const [ todos, settodos ] = useState([
    // todos를 객체로 만들어 놓은거임
    // props ={
    // todos: [
    //   { id:1,
    //    list: '오늘 할 일1',
    //   },
    //   ]
    // }
    // const {todos} = props
    {
      id:1,
      list:'해야할일 1',
      isDone: false,
      active: false,
    },
    {
      id:2,
      list:'해야할일 2',
      isDone: false,
      active: false,
    },
    {
      id:3,
      list:'해야할일 3',
      isDone: false,
      active: false,
    },
  ])
  // ref알아보기!!
  const nextId = useRef(todos.length+1); 
  // 리스트 삭제
  // 삭제 클릭시 id값을 인수로 받아서 todos배열에서 id값이 다른 객체만 업데이트
  const onDelete = (id) => {
    settodos(todos.filter(todo => id !== todo.id));
  }
  // 리스트 클리시 토글 붙는것
  const onToggle = (id) => {
    settodos(todos.map(todo => id===todo.id ? {...todo, active: !todo.active} : todo))
  }
  return (
    <div className="App">
      {/* todos={todos}는 props인데 TodoList여기 컴포넌트의 props로 받음 */}
      <CreateTodo list ={list} onChange={onChange} onCreate={onCreate}/>
      <TodoLists todos={todos} onDelete={onDelete} onToggle={onToggle}/>
    </div>
  );
}

export default App;
