/* import React from 'react' */
import ReactDOM from 'react-dom/client'
/* import App from './components/App.jsx' */
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
/* import './index.css' */

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
