const BulkAction = ({ setTodos, setMultiCheck, multiCheck }) => {
  const handleRemove = () => {
    setTodos((prev) => prev.filter((todo) => !multiCheck.includes(todo.id)));
    setMultiCheck([]);
  };
  if (!multiCheck.length) return null;
  return (
    <div className="todo-row bulk-action">
      <div className="row-block">
        <p className="bulk-title">Bulk Action:</p>
      </div>
      <div className="row-block">
        <button className="button-detail" type="button">
          Done
        </button>
        <button
          className="button-remove"
          type="button"
          onClick={() => handleRemove()}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default BulkAction;
