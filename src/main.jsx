import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Register from './Components/Register/Register.jsx';
import Login from './Components/Login/Login.jsx';
import AddTouristSpot from './Components/AddTouristSpot/AddTouristSpot.jsx';
import ToursDetails from './Components/TourDetails/ToursDetails.jsx';
import PrivateRoute from './Components/Route/PrivateRoute.jsx';
import MyList from './Components/MyList/MyList.jsx';
import UpdateTour from './Components/UpdateTour/UpdateTour.jsx';
import AlltouristSpot from './Components/AllTOuristSpot/AlltouristSpot.jsx';
import CountriesDetails from './Components/CountriesDetails/CountriesDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://assignment-10-server-blush-zeta.vercel.app/tours')
      },
      {
        path: '/Register',
        element: <Register></Register>
      },
      {
        path: '/Login',
        element: <Login></Login>
      },
      {
        path: '/addTouristSpot',
        element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
      },
      {
        element: <PrivateRoute><ToursDetails></ToursDetails></PrivateRoute>,
        path: '/:id',
        loader: () => fetch('https://assignment-10-server-blush-zeta.vercel.app/tours')
      },
      {
        path:'/myList',
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
        loader: () => fetch('https://assignment-10-server-blush-zeta.vercel.app/tours')
      },
      {
        path: '/updateTour/:id',
        element: <UpdateTour></UpdateTour>,
        loader: ({params}) => fetch(`https://assignment-10-server-blush-zeta.vercel.app/tours/${params.id}`)
      },
      {
        path: '/allTouristsSpot',
        element: <AlltouristSpot></AlltouristSpot>,
        loader: () => fetch('https://assignment-10-server-blush-zeta.vercel.app/tours')
      },
      {
        path: '/country/:name',
        element: <CountriesDetails></CountriesDetails>,
        loader: () => fetch('https://assignment-10-server-blush-zeta.vercel.app/tours')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
