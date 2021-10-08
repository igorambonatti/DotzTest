import { Action, Reducer } from 'redux'

import * as actions from './actions'
import { ILoaderState } from './types'

const INITIAL_STATE: ILoaderState = {
  active: false,
}
export const LoaderReducer: Reducer<ILoaderState> = (
  state = INITIAL_STATE,
  action: Action | any,
) => {
  switch (action.type) {
    case actions.LOADER_START:
      return {
        ...state,
        active: true,
      }
    case actions.LOADER_STOP:
      return {
        ...state,
        active: false,
      }

    default:
      return state
  }
}
