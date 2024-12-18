import React, { Fragment } from "react";
import "./todoStyle.css";

const TodoList = ({ todos, deleteTask }) => {
  const handleDelete = (todoId) => {
    todos.filter((item) => item.id !== todoId);
  };

  return (
    <>
      {todos.map((item) => (
        <div className="box-container" key={item.id} deleteTask={deleteTask}>
          <button onClick={() => deleteTask(item.id)} className="btn-1">
            Delete
          </button>

          <p className="text">{item.title}</p>
        </div>
      ))}
    </>
  );
};

export default TodoList;
