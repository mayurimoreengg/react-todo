import React from 'react';
import './ToDoList.css';

function ToDoList(props) {
  return (
    <>
      <div className="todo-list-container">
        {props.todoList.length > 0 ? (
          <>
            <h1 className="todo-list-heading">My Todos</h1>
            {props.todoList &&
              props.todoList.map((listItem, index) => {
                return (
                  <div className="todo-item" key={listItem + index}>
                    <div className="item-content">{listItem}</div>
                    <div className="item-actions">
                      <button
                        className="delete-btn"
                        onClick={() => props.deleteItem(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
          </>
        ) : (
          <div className="no-todo">
            No To Do List <br /> Please Add Task
          </div>
        )}
      </div>
    </>
  );
}

export default ToDoList;
