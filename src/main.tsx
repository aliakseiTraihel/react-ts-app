import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Registration from './components/registration/Registration.tsx'
import Profile from "./components/profile/Profile.tsx";
import TodoList from "./components/todos/TodoList.tsx";
import Universities from "./components/custom/Universities.tsx"
import Tasks from "./components/tasks/Tasks.tsx";
import ErrorPage from "./ErrorPage.tsx"
import store from "./redux/Store.tsx"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./components/Root.tsx";
import {Provider} from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "todos",
        element: <TodoList />
      },
      {
        path: "universities",
        element: <Universities />
      },
      {
        path: "tasks",
        element: <Tasks />
      }
   ],
  }
  ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
