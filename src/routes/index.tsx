import Signin from '@pages/auth/Signin'
import Signup from '@pages/auth/Signup'
import Empty from '@pages/home/Empty'
import Home from '@pages/home/Home'
import HomeKilo from '@pages/home/HomeKilo'
import { createBrowserRouter } from 'react-router-dom'

import { AuthRoute } from './AuthRoute'
import { ProtectedRoute } from './ProtectedRoute'

export const router = createBrowserRouter([
  {
    element: <AuthRoute />,
    children: [
      {
        path: '/signin',
        element: <Signin />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      { path: '', element: <HomeKilo /> },
      { path: 'apply', element: <HomeKilo /> },
      { path: '/elements', element: <Empty /> },
    ],
  },
])
