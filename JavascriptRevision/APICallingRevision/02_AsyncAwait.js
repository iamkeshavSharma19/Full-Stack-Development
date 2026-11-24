const url = `https://dummyjson.com/todos`;

//!When we use async/await we have to make a function.

async function getTodos(url) {
  try {
    const resObj = await fetch(url);
    const data = await resObj.json();
    displayTodos(data.todos);
  } catch (error) {
    console.log(error);
  }
}

getTodos(url);

function displayTodos(todos) {
  todos.forEach((el) => {
    const { id, todo, completed } = el;

    document.writeln(`
      
      <div>
        <h1>${todo}</h1>
      </div>
      <h2>${completed ? `Completed` : `Pending`}</h2>
      `);
  });
}
