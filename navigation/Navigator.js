import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNavigator from './BottomTabNavigator'

const Stack = createStackNavigator()

export default () =>
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Main" component={BottomTabNavigator} />
        </Stack.Navigator>
    </NavigationContainer>

