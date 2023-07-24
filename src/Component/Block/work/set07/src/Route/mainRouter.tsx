import { createBrowserRouter } from "react-router-dom";


import Contact from "../Components/pages/Contact";
import Homescreen from "../Components/pages/Homescreen";
import Layout from "../Components/Block/Layout";





export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Homescreen />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
