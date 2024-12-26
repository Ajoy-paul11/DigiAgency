import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Digital from "./components/Digital.jsx";
import Home from "./components/Home.jsx";
import Magazine from "./components/Magazine.jsx";
import Newspaper from "./components/Newspaper.jsx";
import Radio from "./components/Radio.jsx";
import Television from "./components/Television.jsx";
import ProductsTemplate from "./components/ProductsTemplate.jsx";
import Contact from "./components/Contact.jsx";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/digital",
        element: <Digital />,
      },
      {
        path: "/magazine",
        element: <Magazine />,
      },
      {
        path: "/newspaper",
        element: <Newspaper />,
      },
      {
        path: "/radio",
        element: <Radio />,
      },
      {
        path: "/tv",
        element: <Television />,
      },
      {
        path: "/portfolio-product",
        element: <ProductsTemplate />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </ThemeProvider>
  </StrictMode>
);
