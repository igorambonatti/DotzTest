import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import CreditCard from '../pages/Cards/Credit'
import PhysicalCard from '../pages/Cards/Physical'
import VirtualCard from '../pages/Cards/Virtual'
import ConvertBrl from '../pages/Convert/BRL'
import ConvertDotz from '../pages/Convert/Dotz'
import Extract from '../pages/Extract'
import Home from '../pages/Home'
import Payment from '../pages/Payment'

const App = createStackNavigator()

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#F56700' },
    }}
  >
    <App.Screen name='Home' component={Home} />
    <App.Screen name='Extract' component={Extract} />
    <App.Screen name='Convert-BRL' component={ConvertBrl} />
    <App.Screen name='Convert-Dotz' component={ConvertDotz} />
    <App.Screen name='Virtual-Card' component={VirtualCard} />
    <App.Screen name='Physical-Card' component={PhysicalCard} />
    <App.Screen name='Credit-Card' component={CreditCard} />
    <App.Screen name='Payment' component={Payment} />
  </App.Navigator>
)

export default AppRoutes
