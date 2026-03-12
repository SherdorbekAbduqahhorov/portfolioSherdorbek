import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CrutPage from "./pages/CrutPage";
function App() {

  const router = createBrowserRouter([
   {
    path:'/',
    element:<HomePage/>
   },
   {
    path:'crut',
    element:<CrutPage/>
   }
  ]);

  return <RouterProvider router={router} />;
}

export default App;