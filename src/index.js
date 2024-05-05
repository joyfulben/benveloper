import React from 'react';
import './index.css';
import App from './App';
import ErrorPage from './error-page';
import Root from './components/PVSystem/Root';
import Home from './components/PVSystem/Home';
import SystemForm from './components/PVSystem/SystemForm';
import Appliances from './components/PVSystem/Appliances';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "benveloper",
        element: <App />,
        errorElement: <ErrorPage />
      }
    ]
  },
  {
    path:"/pv-system",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "system_output",
        element: <SystemForm />
      },
      {
        path: "e_use_calc",
        element: <Appliances />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


