import React, { userState, useState } from 'react';
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
      checked: true,
    }
  ])

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
