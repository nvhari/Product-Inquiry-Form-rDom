// src/App.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductInquiryForm from "./ProductInquiryForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductInquiryForm />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
