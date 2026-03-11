import { useContext } from "react";
import { todoContext } from "./ContextProvider";

const CreateTodo = () => {
  let { newTodo, setNewTodo, addTodo } = useContext(todoContext);

  return (
    <div>
      <h1>Create Todo</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          name="todo"
          placeholder="Enter Todo..."
          value={newTodo}
          required
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default CreateTodo;
