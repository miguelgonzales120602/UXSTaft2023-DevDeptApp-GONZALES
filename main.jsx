// Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Style Components
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Function Components
import App from './App.jsx';
import HomePage from './src/components/homepage/homepage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
