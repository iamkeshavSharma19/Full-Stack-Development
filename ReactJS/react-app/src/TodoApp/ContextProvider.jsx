import { createContext, useState } from "react";
export const todoContext = createContext();


const ContextProvider = (props) => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setAllTodos] = useState([
    {
      id: 1,
      text: "Default Todo",
    },
  ]);

  const addTodo = (e) => {
    e.preventDefault();
    console.log(newTodo);

    if (newTodo.trim() === "") {
      alert("No todo available");
      setNewTodo("");
      return;
    }

    let todo = {
      id: Date.now(),
      text: newTodo.trim(),
    };

    console.log(todo);

    setAllTodos((prev) => [...prev, todo]);

    //~clear input field
    setNewTodo("");
  };

  //~this is basically a function for removing the todos
  const removeTodo = (id) => {
    let allTodos = [...todos];

    let filteredTodo = allTodos.filter((ele) => ele.id !== id);
    setAllTodos(filteredTodo);
  };

  //~this is basically a function for editing the todos
  const editTodo = (id) => {
    let allTodos = [...todos];
    let todoToBeEdit = allTodos.find((ele) => ele.id === id);
    setNewTodo(todoToBeEdit.text);
    removeTodo(id);
  };

  return (
    <todoContext.Provider
      value={{
        newTodo,
        setNewTodo,
        todos,
        setAllTodos,
        addTodo,
        removeTodo,
        editTodo,
      }}
    >
      {props.children}
    </todoContext.Provider>
  );
};

export default ContextProvider;


