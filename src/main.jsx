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

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        // loader:()=>fetch('jobFeatures.json')
        
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'jobDetails/:id',
        element:<JobDetails></JobDetails>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
