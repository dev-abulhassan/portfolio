import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import AboutMe from "../pages/AboutMe";
import ContactMe from "../pages/ContactMe";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"projects",
        element: <Projects></Projects>
      },
      {
        path: "about",
        element: <AboutMe></AboutMe>
      },
      {
        path: "/contact",
        element: <ContactMe></ContactMe>
      }
    ],
  },
]);
export default router;
