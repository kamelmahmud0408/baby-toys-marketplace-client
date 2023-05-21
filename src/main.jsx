import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './Provider/AuthProvider'
import { Helmet, HelmetProvider } from 'react-helmet-async'

<Helmet>
  <title>Hello World</title>
  <link rel="canonical" href="https://www.tacobell.com/" />
</Helmet>

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <HelmetProvider>
      <React.StrictMode>
        <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
      </React.StrictMode>
    </HelmetProvider>
  </div>
)
