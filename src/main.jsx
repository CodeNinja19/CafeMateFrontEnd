import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from '../pages/About.jsx';
import Login from '../pages/Login.jsx';
import Compare from '../pages/Compare.jsx';
import Home from '../pages/Home.jsx';
import Contact from '../pages/Contact.jsx';
import Profile from '../pages/Profile.jsx';
import Search from '../pages/Search.jsx';
import SignUp from '../pages/SignUp.jsx';
import CafeDisplay from '../pages/CafeDisplay.jsx';
import ProtectRoute from '../components/ProtectRoute.jsx';
import store from './store.js';
import { Provider } from 'react-redux';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/About",
        element:<About/>,
      },
      {
        path:"/Compare",
        element:<ProtectRoute><Compare/></ProtectRoute>,
      },
      {
        path:"/Contact",
        element:<ProtectRoute><Contact/></ProtectRoute>,
      },
      {
        path:"/Search",
        element:<ProtectRoute><Search/></ProtectRoute>,
      },
      {
        path:"/Profile",
        element:<ProtectRoute><Profile/></ProtectRoute>,
      },
      {
        path:"/Login",
        element:<Login/>,
      }
      ,
      {
        path:"/SignUp",
        element:<SignUp/>
      },
      {
        path:"Cafe",
        element:<ProtectRoute><CafeDisplay/></ProtectRoute>,
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
