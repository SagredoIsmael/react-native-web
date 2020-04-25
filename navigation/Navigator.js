import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNavigator from './BottomTabNavigator'

const Stack = createStackNavigator()

export default () => 
    <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomTabNavigator} />
    </Stack.Navigator>
