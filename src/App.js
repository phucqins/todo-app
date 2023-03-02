import { useState } from "react";
import "./App.css";
import AddTodo from "./screens/AddTodo";
import TodoList from "./screens/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="app">
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
