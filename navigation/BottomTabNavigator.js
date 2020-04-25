import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'
import { screens } from '../constants/navigation'
import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import LinksScreen from '../screens/LinksScreen'

const BottomTab = createBottomTabNavigator()

const { MAIN, PROFILE, CHAT } = screens

export default function BottomTabNavigator({ navigation, route }) {
  
  navigation.setOptions({ headerTitle: 'Sagredo App' })

  return (
    <BottomTab.Navigator initialRouteName={MAIN}>
      <BottomTab.Screen
        name={MAIN}
        component={HomeScreen}
        options={{
          title: MAIN,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name={PROFILE}
        component={LinksScreen}
        options={{
          title: 'Resources',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  )
}
