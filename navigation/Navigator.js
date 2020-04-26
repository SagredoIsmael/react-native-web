import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { screens } from '../constants/navigation'
import StackScreens from './Stack'
export const { LOGIN, MAIN, PROFILE, CHAT } = screens

export default () =>
    <NavigationContainer>
        <StackScreens/>
    </NavigationContainer>

