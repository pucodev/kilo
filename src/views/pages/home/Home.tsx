import Loader from '@components/loader/Loader'
import { Card, CardBody, CardContent } from '@pucoui/Card'
import MockService, { type MockUserNode } from '@services/mock.service'
import applog from '@utils/logger'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState<MockUserNode[]>([])

  const [searchParams] = useSearchParams()
  const page = Number(searchParams.get('page') || '1')

  async function init() {
    setIsLoading(true)
    const mokedUsers = await MockService.fetchUsers()
    applog.debug('USERS = ', mokedUsers)
    setUsers(mokedUsers)
    setIsLoading(false)
  }
  useEffect(() => {
    init()
    applog.debug('RENDER LIST WITH PAGE ', page)
  }, [page])

  return (
    <Card>
      {isLoading ? (
        <Loader />
      ) : (
        <CardBody>
          <CardContent>
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>name</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Link className="btn mt-4" to={`/?page=${page + 1}`}>
              Next page
            </Link>
          </CardContent>
        </CardBody>
      )}
    </Card>
  )
}
