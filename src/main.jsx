import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Root/Root';
import Error from './ErrorPage/Error';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Statistics from './Statistics/Statistics';
import GadgetDetails from './GadgetDetails/GadgetDetails';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'Dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/public/gadgetData.json'),
      },
      {
        path: 'Statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('/public/gadgetData.json'),
      },
      {
        path: 'Gadgets/:product_id',
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch('/public/gadgetData.json'),
      },
    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
