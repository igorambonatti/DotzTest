import { IUser } from './types'

export const AUTH_REQUEST = 'AUTH_REQUEST'
export const authRequestAction = (payload: IUser) => ({
  type: AUTH_REQUEST,
  payload,
})

export const LOGOUT_ACTION = 'LOGOUT_ACTION'
export const logoutAction = () => ({
  type: LOGOUT_ACTION,
})
