import { combineReducers } from 'redux'

import { AuthReducer as auth } from '../auth'
import { LoaderReducer as loader } from '../loader'
import { IReduxState } from '../types'
export default combineReducers<IReduxState>({
  auth,
  loader,
})
