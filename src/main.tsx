import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Registration from './components/Registration.tsx'
import Profile from "./components/Profile.tsx";
import ErrorPage from "./ErrorPage.tsx"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration />,
    errorElement: <ErrorPage />
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
