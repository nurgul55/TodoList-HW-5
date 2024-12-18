import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: crypto.randomUUID(),
      title: text,
    };

    setTodos([...todos, newTask]);
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>JS-16 day Todo List</h1>
      <TodoForm handleAddTodo={addTask} />
      <TodoList todos={todos} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
