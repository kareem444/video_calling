/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import store from './src/controller/store'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/view/pages/home/home'
import Calling from './src/view/pages/calling/calling'
import MakeCall from './src/view/pages/make_call/make_call'
import ReceiveCall from './src/view/pages/receive_call/receive_call'
import Login from './src/view/pages/login/login'
import { Voximplant } from 'react-native-voximplant';

import {
  CALLING_PAGE,
  HOME_PAGE,
  LOGIN_PAGE,
  MAKE_CALL_PAGE,
  RECEIVE_CALL_PAGE,
} from './src/constants/string_constants'

const App = () => {
  const Stack = createNativeStackNavigator()

  const client = Voximplant.getInstance();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Login}
          screenOptions={{ headerTitleAlign: 'center' }}
        >
          <Stack.Screen
            name={LOGIN_PAGE}
            component={Login}
            options={{ title: 'Login' }}
          />
          <Stack.Screen
            name={HOME_PAGE}
            component={Home}
            options={{ title: 'Home' }}
          />
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name={MAKE_CALL_PAGE} component={MakeCall} />
            <Stack.Screen name={RECEIVE_CALL_PAGE} component={ReceiveCall} />
            <Stack.Screen name={CALLING_PAGE} component={Calling} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
