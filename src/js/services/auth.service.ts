import Api from '@api/index'
import { urls } from '@api/urls'

import MainService from './main.service'

export interface UserTokens {
  access_token: string
  refresh_token: string
}

export default class AuthService extends MainService {
  public static async signin(data: { email: string; password: string }) {
    const response = await Api.request<{ data: { tokens: UserTokens } }>(
      'post',
      urls.SIGN.SINGIN,
      data,
    )
    return response.data.data
  }

  public static async signup(data: { email: string; password: string }) {
    const response = await Api.request<{
      data: { email: string; tokens: UserTokens }
    }>('post', urls.SIGN.SIGNUP, data)

    return response.data.data
  }
}
