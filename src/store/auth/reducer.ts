import { Action, Reducer } from 'redux'

import * as actions from './actions'
import { IAuthState } from './types'

const INITIAL_STATE: IAuthState = {
  loading: false,
}
export const AuthReducer: Reducer<IAuthState> = (
  state = INITIAL_STATE,
  action: Action | any,
) => {
  switch (action.type) {
    case actions.AUTH_REQUEST:
      return {
        ...state,
        user: action.payload,
      }
    case actions.LOGOUT_ACTION:
      return {
        ...state,
        user: undefined,
      }

    default:
      return state
  }
}
