import Sidebar from '@components/sidebar/Sidebar'
import AuthModel from '@models/auth.model'
import applog from '@utils/logger'

export function ProtectedRoute() {
  const auth = AuthModel.isAuthenticated()
  applog.debug('[PROTECTED] IS AUTH = ', auth)

  // return auth ? <Sidebar /> : <Navigate to="/signin" replace />
  // NO PROTECTED VIEWS
  return <Sidebar />
}
