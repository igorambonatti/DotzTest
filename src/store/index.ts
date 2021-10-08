import AsyncStorage from '@react-native-async-storage/async-storage'
import { applyMiddleware, compose, createStore, StoreCreator } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

import rootReducer from '../store/reducers'

// whiteList - inserir apenas os Reducers que irão ser persistidos na APP.
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['auth', 'loader'],
  whiteList: [],
}

const middlewares = []
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = persistReducer(persistConfig, rootReducer)
export let store
export const configureStore = (_clean = false): any => {
  const create: StoreCreator = createStore

  const createDebugger: any = require('redux-flipper').default
  middlewares.push(createDebugger())

  store = create(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares, thunk)),
  )
  const persister = persistStore(store)

  // Clear Store
  if (_clean) persister.purge()

  return { persister, store }
}

export * from './types'
