import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import NotFound from './Components/NotFound/NotFound.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
 <>
 <RouterProvider router={router} />
 </>
)
