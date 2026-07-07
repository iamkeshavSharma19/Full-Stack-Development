import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Router";


const App = () => {
  return (
    <>
      <h1>React Mega Project</h1>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
