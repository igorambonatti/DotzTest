export interface IAuthState {
  loading: boolean
  user?: IUser
}

export interface IUser {
  token: string
  email: string
}
