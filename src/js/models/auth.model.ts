import applog from '@utils/logger'

import AuthService from '../services/auth.service'
import UserModel from './user.model'

export interface UserTokens {
  access_token: string
  refresh_token: string
}

const USER_TOKEN_TAG = '_ut'

export default class AuthModel extends UserModel {
  public static getUserToken() {
    return this.getTokens()?.access_token || ''
  }

  // TODO: IMplement getRefreshToken
  public static getRefreshToken() {
    applog.warn('Need to implement getRefreshToken')
    return ''
  }

  public static async signup(data: { email: string; password: string }) {
    return AuthService.signup(data)
  }

  public static async signin(data: { email: string; password: string }) {
    return await AuthService.signin(data)
  }

  public static clearTokens() {
    localStorage.removeItem(USER_TOKEN_TAG)
  }

  public static saveTokens(tokens: UserTokens) {
    localStorage.setItem(USER_TOKEN_TAG, JSON.stringify(tokens))
  }

  public static getTokens(): UserTokens | undefined {
    const stringTokens = localStorage.getItem(USER_TOKEN_TAG) || ''
    try {
      return JSON.parse(stringTokens) as UserTokens
    } catch {
      return
    }
  }

  public static isAuthenticated(): boolean {
    const tokens = this.getTokens()
    applog.debug('IS LOGGED = ', tokens && tokens?.access_token)

    return Boolean(tokens && tokens?.access_token)
  }
}

// To force auth
// ```js
// localStorage.setItem("_ut", JSON.stringify({access_token: "access_token", refresh_token: "refresh_token"}))
// ```
