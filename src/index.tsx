import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
import { Provider } from 'react-redux'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { PersistGate } from 'redux-persist/integration/react'
import RNAsyncStorageFlipper from 'rn-async-storage-flipper'

import Loader from './components/Loader'
import Routes from './routes'
import { configureStore } from './store'

enableScreens()

RNAsyncStorageFlipper(AsyncStorage)

const { store, persister } = configureStore(false)

export const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persister}>
          <Routes />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  )
}
