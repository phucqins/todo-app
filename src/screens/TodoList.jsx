import React, { useState } from "react";

const TodoItem = ({ data, setTodos }) => {
  const [expand, setExpand] = useState(false);
  const [todo, setTodo] = useState(data);
  const [error, setError] = useState(false);

  const handleRemove = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleChange = (data, type) => {
    setTodo((prev) => {
      return { ...prev, [type]: data.target.value };
    });
  };

  const handleSubmit = (id) => {
    if (!todo.name.trim()) return setError(true);
    setTodos((prev) =>
      prev.map((el) => {
        if (el.id === id) return todo;
        return el;
      })
    );
  };

  return (
    <div>
      <div className="todo-row">
        <div className="row-block">
          <input type="checkbox" id={data.id} name={data.name} />
          <p>{data.name}</p>
        </div>
        <div className="row-block">
          <button
            className="button-detail"
            type="button"
            onClick={() => setExpand((prev) => !prev)}
          >
            Detail
          </button>
          <button
            className="button-remove"
            type="button"
            onClick={() => handleRemove(data.id)}
          >
            Remove
          </button>
        </div>
      </div>
      {expand && (
        <div className="edit-todo">
          <input
            className={`${error ? "error" : ""} name`}
            value={todo["name"]}
            type={"text"}
            onChange={(e) => {
              handleChange(e, "name");
            }}
            placeholder="Add new task"
          ></input>
          {error ? <i className="error-text">Required field</i> : ""}
          <label htmlFor="des">Description</label>
          <textarea
            onChange={(e) => {
              handleChange(e, "description");
            }}
            value={todo["description"]}
            name=""
            id="des"
            cols="30"
            rows="10"
          ></textarea>
          <div className="block">
            <div className="block-input">
              <label htmlFor="date">Due Date</label>
              <input
                value={todo["dueDate"]}
                onChange={(e) => {
                  handleChange(e, "dueDate");
                }}
                type="date"
                id="date"
              />
            </div>
            <div className="block-input">
              <label htmlFor="type">Priority</label>
              <select
                onChange={(e) => {
                  handleChange(e, "priority");
                }}
                value={todo["priority"]}
                name="type"
                id="type"
              >
                <option defaultValue value="low">
                  Low
                </option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <button type="submit" onClick={() => handleSubmit(data.id)}>
            Update
          </button>
        </div>
      )}
    </div>
  );
};

const TodoList = ({ todos, setTodos }) => {
  console.log(todos);
  return (
    <div className="todo-list">
      <h2>To Do List</h2>
      <input type={"text"} placeholder="Search ..."></input>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} data={todo} setTodos={setTodos} />;
      })}
    </div>
  );
};

export default TodoList;
