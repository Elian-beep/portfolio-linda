import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Services } from "./pages/Services";
import { Resume } from "./pages/Resume";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
    ],
  },
]);
