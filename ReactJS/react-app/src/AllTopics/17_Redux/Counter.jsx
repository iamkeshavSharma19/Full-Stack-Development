import { useSelector } from "react-redux";


const ReduxCounter = () => {
  let count = useSelector((state) => {
    return state.counter;
  });

  return (
    <div className="text-center p-5">
      <h1>Redux Counter</h1>
      <h1 className="text-4xl font-bold mb-5">Counter: {count}</h1>
      <button className="px-10 bg-green-400">Increment</button>
    </div>
  );
};

export default ReduxCounter;
