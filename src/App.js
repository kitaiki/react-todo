import React, { useState, useRef, useCallback } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([
    {
      id:1,
      text: '리엑트 기초 배우기1',
      checked: true,
    },
    {
      id:2,
      text: '리엑트 기초 배우기2',
      checked: true,
    },
    {
      id:3,
      text: '리엑트 기초 배우기3',
      checked: false,
    }
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };

      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
