import React, { useEffect, useState } from "react";
import BulkAction from "../components/BulkAction";
import TodoItem from "../components/TodoItem";

const TodoList = ({ todos, setTodos }) => {
  const [multiCheck, setMultiCheck] = useState([]);
  const [search, setSearch] = useState([]);
  const [filteredTodo, setFilteredTodo] = useState(todos);

  useEffect(() => {
    setFilteredTodo(todos);
  }, [todos]);

  useEffect(() => {
    const debounceSearch = () => {
      setFilteredTodo(todos.filter((el) => el.name.includes(search)));
    };
    let timerId = setTimeout(() => debounceSearch(), 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="todo-list">
      <div className="list-wrapper">
        <h2>To Do List</h2>
        <input
          type={"text"}
          onChange={(e) => handleSearch(e)}
          placeholder="Search ..."
        ></input>
        {filteredTodo.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              data={todo}
              setMultiCheck={setMultiCheck}
              setTodos={setTodos}
            />
          );
        })}
      </div>
      <BulkAction
        setTodos={setTodos}
        setMultiCheck={setMultiCheck}
        multiCheck={multiCheck}
      />
    </div>
  );
};

export default TodoList;
