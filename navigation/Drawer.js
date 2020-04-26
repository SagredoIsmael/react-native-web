import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigator from './Tab'
import { MAIN } from './Navigator'

const Drawer = createDrawerNavigator()

export default () =>
    <Drawer.Navigator initialRouteName={MAIN}>
        <Drawer.Screen name={MAIN} component={TabNavigator} />
    </Drawer.Navigator>