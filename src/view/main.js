import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Calling from './pages/calling/calling'
import Home from './pages/home/home'
import Login from './pages/login/login'
import MakeCall from './pages/make_call/make_call'
import ReceiveCall from './pages/receive_call/receive_call'
import {
    CALLING_PAGE,
    CHECK_CALL_PAGE,
    HOME_PAGE,
    LOGIN_PAGE,
    MAKE_CALL_PAGE,
    RECEIVE_CALL_PAGE,
} from '../constants/pages_strings_constants'
import CheckCallSettings from './pages/chack_call_settings/check_call_settings'

export default Main = () => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={Login}
                screenOptions={{ headerTitleAlign: 'center' }}>
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
                <Stack.Screen
                    name={CHECK_CALL_PAGE}
                    component={CheckCallSettings}
                    options={{ title: 'Call Settings' }}
                />
                <Stack.Group screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={MAKE_CALL_PAGE} component={MakeCall} />
                    <Stack.Screen name={RECEIVE_CALL_PAGE} component={ReceiveCall} />
                    <Stack.Screen name={CALLING_PAGE} component={Calling} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
