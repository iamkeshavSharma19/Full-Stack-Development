import { useEffect, useState } from "react";
import Todo from "./Todo";

const Todos = () => {
  const [allTodos, setAllTodos] = useState([]);

  async function getTodos() {
    try {
      let resp = await fetch("https://dummyjson.com/todos");
      let data = await resp.json();
      console.log(data.todos);
      setAllTodos(data.todos);
    } catch (err) {
      console.log(err.response);
    }
  }

  useEffect(() => {
    getTodos(); //~ invokes during mounting phase
  }, []);

  return (
    <div>
      <h1 className="p-2 font-bold text-3xl">Todos</h1>
      {allTodos.length === 0 ? (
        <>
          <h1>No Todos Available</h1>
        </>
      ) : (
        <>
          <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {allTodos.map((ele) => {
              return <Todo key={ele.id} ele={ele} />;
            })}
          </section>
        </>
      )}
    </div>
  );
};

export default Todos;
