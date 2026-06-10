import React, { createContext, useState } from "react";


export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      //~Date.now() === gives us the current date with milliseconds and milliseconds will always be unique.
      //?trim() === It is used for removing the leading and the trailing spaces

      id: Date.now(),
      text: todo.trim(),
    };

    setAllTodos((prev) => [...prev, newTodo]);

    // console.log("todo created", allTodos);
    // localStorage.setItem("todos", JSON.stringify(allTodos));
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

    savedTodos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
    console.log(savedTodos);
    //&clearing input fields
    setTodo("");
  };

  return (
    <TodoContext.Provider value={{ todo, handleTodo, handleSubmit }}>
      {props.children}
    </TodoContext.Provider>
  );
};
