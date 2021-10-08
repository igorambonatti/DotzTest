import { IAuthState } from './auth/types'
import { ILoaderState } from './loader/types'

export interface IReduxState {
  auth: IAuthState
  loader: ILoaderState
}
