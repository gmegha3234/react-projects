import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home";
import AboutUs from "./AboutUs";
import BaseLayout from "./BaseLayout";

const routes = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default function App() {
  return <RouterProvider router={router}/>
}