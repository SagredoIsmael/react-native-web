import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import DrawerNavigator from './Drawer'
import { LOGIN, MAIN } from './Navigator'

const Stack = createStackNavigator()

export default () =>
    <Stack.Navigator initialRouteName={LOGIN}>
        <Stack.Screen name={LOGIN} component={Login} />
        <Stack.Screen name={MAIN} component={DrawerNavigator} />
    </Stack.Navigator>