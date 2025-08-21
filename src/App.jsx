import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Applayout from './components/layout/Applayout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutShop from './pages/AboutShop';
import  Menu  from './pages/Menu';
import QrCode from './components/qrcode/QrCode';

const App = () => {

  const route = createBrowserRouter([
    {
      path: '/',
      element: <Applayout />,
      children: [
        {
          path: '/',
          element: <Home />

        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/aboutshop',
          element: <AboutShop />

        },
        {
          path: '/menu',
          element: <Menu />

        },
        {
          path: '/qrcode',
          element:<QrCode />
        },
      ]


    }
  ])


  return (
    <RouterProvider router={route} />

  )
}

export default App