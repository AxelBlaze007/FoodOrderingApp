import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.js";
import Body from "./components/Body.js";
import RestaurantCard from "./components/RestaurantCard.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import About from "./components/About.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
//
/* 

!header
?logo
?navbar


!Body
?serchBar
search button

restroant container
restro card



!footer
?copyright
?links
?Address
?contact

*/

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
