import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './Layout/Main';
import Statistics from './Statistics/Statistics';
import JobDetails from './components/JobDetails/JobDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blog from './components/Blog/Blog';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import { productsAndCartData } from './Loaders/getApply';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        
        
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'appliedJob',
        element:<AppliedJobs></AppliedJobs>,
        loader: productsAndCartData
      },
      {
        path:'jobDetails/:jobId',
        element:<JobDetails></JobDetails>,
        loader:()=>fetch('/jobFeatures.json')
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
