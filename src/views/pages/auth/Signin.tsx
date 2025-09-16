import { isApiError } from '@api/index'
import AuthModel from '@models/auth.model'
import { Button } from '@pucoui/Button'
import { Field, FieldLabel } from '@pucoui/Field'
import { Image } from '@pucoui/Image'
import { Input } from '@pucoui/Input'
import { showError } from '@utils/utils'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function signin() {
    try {
      const response = await AuthModel.signin({
        email,
        password,
      })

      AuthModel.saveTokens(response.tokens)
      navigate('/')
    } catch (error) {
      if (isApiError(error)) {
        switch (error.api_error_code) {
          case 'AUTH_SIGNIN_UNAUTHORIZED':
            showError('Invalid email or password. Please try again')
            break

          default:
            showError('An error occurred. Please try again')
            break
        }
      } else {
        showError('An error occurred. Please try again')
      }
    }
  }

  return (
    <div className="page-base">
      <div
        className="is-flex w-100 is-flex-column is-gap-5"
        style={{ maxWidth: '600px' }}
      >
        <Image
          src="/logo.svg"
          className="w-100 is-flex is-justify-content-center"
        />

        <h1 className="is-text-center">Sign In</h1>

        <div className="is-flex is-gap-3 is-flex-column">
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Field>
          <div className="w-100 mt-3">
            <Button style={{ width: '100%' }} onClick={signin}>
              Sign In
            </Button>
          </div>

          {/* Signup */}
          <p className="is-text-center mt-2">
            Don't have an account yet? <Link to="/signup">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
