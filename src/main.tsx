import React from 'react'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ErrorPage from './routes/ErrorPage.tsx'
import HomePage from './routes/HomePage.tsx'
import About from './routes/About.tsx'
import Approach from './routes/Approach.tsx'
import Online from './routes/Online.tsx'
import Enterprises from './routes/Entreprises.tsx'
import Contacts from './routes/Contacts.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/approach",
        element: <Approach />
      },
      {
        path: "/online",
        element: <Online />
      },
      {
        path: "/enterprises",
        element: <Enterprises />
      },
      {
        path: "/contacts",
        element: <Contacts />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)