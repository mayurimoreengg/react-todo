import React from 'react';
import './ToDoForm.css';

function ToDoForm(props) {
  return (
    <>
      <div className="todo-form-container">
        <input
          className="task-input"
          value={props.userInput}
          onChange={(e) => props.setUserInput(e.target.value)}
          placeholder="Enter Task"
        />
        <button className="add-btn" onClick={props.addItem}>
          Add
        </button>
      </div>
    </>
  );
}

export default ToDoForm;
