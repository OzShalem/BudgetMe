import { router } from "./Routes/routes";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
