import React, { useState } from "react";

const getDateFormat = () => {
  return new Date().toISOString().split("T")[0];
};

const defaultTodo = {
  name: "",
  description: "",
  dueDate: getDateFormat(),
  priority: "low",
};

const AddTodo = ({ setTodos }) => {
  const [todo, setTodo] = useState(defaultTodo);
  const [error, setError] = useState(false);

  console.log(new Date().toDateString());

  const handleChange = (data, type) => {
    setTodo((prev) => {
      return { ...prev, [type]: data.target.value };
    });
  };

  const handleSubmit = () => {
    if (!todo.name.trim()) return setError(true);
    setTodos((prev) => [...prev, { ...todo, id: Math.random() }]);
    setTodo({ ...defaultTodo });
  };

  return (
    <div className="add-todo">
      <h2>New Task</h2>
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
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
