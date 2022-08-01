import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { TailwindProvider } from 'tailwindcss-react-native'
import MainNavigator from './src/navigator/MainNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <SafeAreaProvider>
          <MainNavigator />
        </SafeAreaProvider>
      </TailwindProvider>
    </NavigationContainer>
  )
}

export default App