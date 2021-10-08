import React from 'react'
import { SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'

import Loader from '../components/Loader'
import { IReduxState } from '../store/types'
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

const Routes: React.FC = () => {
  const { user } = useSelector((state: IReduxState) => state.auth)
  const { active } = useSelector((state: IReduxState) => state.loader)
  if (active) {
    return <Loader />
  }
  return user ? <AppRoutes /> : <AuthRoutes />
}

export default Routes
