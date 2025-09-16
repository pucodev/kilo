const API_URL = import.meta.env.VITE_API_URL

export const urls = {
  apiUrl: API_URL,
  SIGN: {
    SINGIN: `${API_URL}/auth/signin`,
    SIGNUP: `${API_URL}/auth/signup`,
  },
  ITEMS: {
    ROOT: `${API_URL}/estimates`,
  },
  // FIXME: Remove, only test purpose
  MOCK_USERS: {
    ROOT: 'https://jsonplaceholder.typicode.com/users',
  },
}
