import { createBrowserRouter } from "react-router-dom";
import Layout from "../Component/Block/Layout";
import Homescreen from "../Component/pages/HomeScreen";

import Contact from "../Component/pages/Contact";



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
