const url = "https://dummyjson.com/todos";

// When we use async/await we have to make a function
async function getTodos(url) {
  try {
    let resObj = await fetch(url);
    let data = await resObj.json();
    console.log(data.todos);
    displayTodos(data.todos);
  } catch (err) {
    console.log(err);
  }
}

console.log("Hello World");
getTodos(url);

function displayTodos(todos) {
  console.log(todos);
  todos.forEach((el) => {
    console.log(el);
    let { id, todo, completed } = el;
    document.writeln(`
      <div>
        <h1>${todo}</h1>
      </div>
      <h2>${completed ? "Completed" : "Pending"}</h2>
    `);
  });
}
