import React, { useState } from 'react';
import './style.css';
import ToDoForm from './Components/ToDoForm/ToDoForm';
import ToDoList from './Components/ToDoList/ToDoList';

export default function App() {
  const [userInput, setUserInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    let updatedList = [...todoList];
    updatedList.push(userInput);
    setTodoList(updatedList);
    setUserInput('');
  };

  const deleteItem = (idx) => {
    let updatedList = todoList.filter((itm, index) => index !== idx);
    setTodoList(updatedList);
  };

  return (
    <div>
      <ToDoForm
        userInput={userInput}
        setUserInput={setUserInput}
        addItem={addItem}
      />
      <ToDoList todoList={todoList} deleteItem={deleteItem} />
    </div>
  );
}
