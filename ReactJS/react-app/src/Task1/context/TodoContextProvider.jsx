import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  //~Creating a new state variable for editing
  const [editId, setEditId] = useState(null);

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //&edit logic === little bit confusing Logic
    if (editId) {
      const todos = [...allTodos];
      const updatedTodos = todos.map((ele) => {
        if (ele.id === editId) {
          return { ...ele, text: todo };
        } else {
          return ele;
        }
      });
      setAllTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodo("");
      setEditId(null);
      return;
    }
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

  //?Deleting the todo
  const handleDeleteTodo = (id) => {
    const todos = [...allTodos];
    const filteredTodos = todos.filter((ele) => ele.id !== id);
    setAllTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  //~Editing the todo
  const handleEditTodo = (id) => {
    //&Very very similar to the delete functionality
    const todos = [...allTodos];
    const todoToEdit = todos.find((ele) => ele.id === id);
    setEditId(id);
    setTodo(todoToEdit.text);
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        handleTodo,
        handleSubmit,
        allTodos,
        handleDeleteTodo,
        handleEditTodo,
        editId,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
