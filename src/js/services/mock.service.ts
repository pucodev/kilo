// FIXME: Delete this file is for test purpose
import Api from '@api/index'
import { urls } from '@api/urls'

import MainService from './main.service'

export interface MockUserNode {
  id: number
  name: string
}

export default class MockService extends MainService {
  public static async fetchUsers() {
    const response = await Api.request<MockUserNode[]>(
      'get',
      urls.MOCK_USERS.ROOT,
    )

    return response.data
  }
}
