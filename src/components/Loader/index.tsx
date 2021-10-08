import React from 'react'
import { View, ActivityIndicator } from 'react-native'

// import { Container } from './styles';

const Loader: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F56700',
      }}
    >
      <ActivityIndicator size='large' color='#fff' />
    </View>
  )
}

export default Loader
