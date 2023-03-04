import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./screens/AddTodo";
import TodoList from "./screens/TodoList";

const initTodo = JSON.parse(localStorage.getItem("todos")) || [];

function App() {
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    const onUnload = () => localStorage.setItem("todos", JSON.stringify(todos));
    window.addEventListener("beforeunload", onUnload);
    return () => {
      window.removeEventListener("beforeunload", onUnload);
    };
  });
  return (
    <div className="app">
      <div className="main-wrapper">
        <AddTodo setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
