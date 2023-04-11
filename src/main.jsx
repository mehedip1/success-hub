import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Statistics from './components/Statistics';

import Blog from './components/Blog';
import Layout from './components/Layout';
import Home from './components/Home';
import Job from './components/Job';
import Jobs from './components/Jobs';





const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch ('details.json')
      },
     
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'jobs/:jobsId',
        element:  <Job></Job>
      },
     
     
      {
        path: 'jobs',
        element: <Jobs></Jobs>,
        loader: () => fetch('jobs.json')
       
      },
     
      {
        path: 'Blog',
        element: <Blog></Blog>
      },
      
     
     
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router} />
  
)
