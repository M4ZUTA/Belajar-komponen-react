import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'

import Login from "@/Pages/Auth/Login/Login";
import Mahasiswa from "@/Pages/Admin/Mahasiswa/Mahasiswa";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Mahasiswa />,
  }
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)