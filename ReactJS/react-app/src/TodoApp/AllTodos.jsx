import { useContext } from "react";
import { todoContext } from "./ContextProvider";

const AllTodos = () => {
  let { todos } = useContext(todoContext);
  console.log(todos);
  return (
    <div>
      <h1>AllTodos</h1>
    </div>
  );
};

export default AllTodos;
