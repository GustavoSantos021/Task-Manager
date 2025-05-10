import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import TaskPage from "./pages/taskPage.jsx";  

// eslint-disable-next-line react-refresh/only-export-components
function Root() {
  return <App />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
  },
  {
    path: "/task",
    element: <TaskPage />,  // Agora TaskPage está sendo utilizado corretamente
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
