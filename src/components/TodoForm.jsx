import { useState } from "react";
import "./todoStyle.css";

const TodoForm = ({ handleAddTodo }) => {
  const [todoValue, setTodoValue] = useState();

  const handleChange = (event) => {
    setTodoValue(event.target.value);
  };

  const submitTodo = (event) => {
    event.preventDefault();
    handleAddTodo(todoValue);
  };

  return (
    <form className="box" onSubmit={submitTodo}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Add new list item"
      />
      <div className="btn">
        <button type="submit">add todo</button>
        <button type="button">clear all</button>
      </div>
    </form>
  );
};

export default TodoForm;
