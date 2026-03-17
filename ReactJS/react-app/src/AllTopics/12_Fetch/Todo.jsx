const Todo = ({ ele }) => {
  return (
    <div>
      <div className="bg-zinc-200 m-2.5 p-2.5">
        {/* <h2 className="p-2 font-bold text-4xl">{ele.todo}</h2> */}
        {ele.completed ? (
          <h2 className="p-2 font-bold text-4xl line-through">{ele.todo}</h2>
        ) : (
          <h2 className="p-2 font-bold text-4xl">{ele.todo}</h2>
        )}
      </div>
    </div>
  );
};

export default Todo;
