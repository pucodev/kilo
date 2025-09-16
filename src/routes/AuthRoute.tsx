import AuthModel from '@models/auth.model'
import applog from '@utils/logger'
import { Navigate, Outlet } from 'react-router-dom'

export function AuthRoute() {
  const isAuth = AuthModel.isAuthenticated()
  applog.debug('[AUTH ROUTE] IS AUTH = ', isAuth)

  return isAuth ? <Navigate to="/" replace /> : <Outlet />
}
