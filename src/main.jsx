import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Send from './components/Send.jsx'
import View from './components/View.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Answer from './components/Answer.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/send',
    element: <Send />,
  }, 
  {
    path: '/view',
    element: <View />,
  },
  {
    path: '/answer-christmas-questions',
    element: <Answer />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
