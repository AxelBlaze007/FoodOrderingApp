import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.js";
import Body from "./components/Body.js";
import RestaurantCard from "./components/RestaurantCard.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import About from "./components/About.js";
import RestaurantMenu from "./components/RestaurantMenu.js";

import UserContext from "./utils/UserContext.js";

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

const Groceries = lazy(() => {
  return import("./components/Groceries.js");
});
const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Panna",
    };
    setUserName(data.name);
  }, []);
  return (
    <div>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />

        <Outlet />
      </UserContext.Provider>
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
        path: "/groceries",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Groceries />
          </Suspense>
        ),
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
