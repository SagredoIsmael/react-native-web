import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MAIN, PROFILE, CHAT } from './Navigator'
import Colors from '../constants/colors'
import MainScreen from '../screens/Main'
import ProfileScreen from '../screens/Profile'
import ChatScreen from '../screens/Chat'
import { Ionicons } from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator()

export default ({ navigation }) => {
  navigation.setOptions({ headerTitle: 'Sagredo App' })

  return (
    <BottomTab.Navigator initialRouteName={MAIN}>
      <BottomTab.Screen
        name={MAIN}
        component={MainScreen}
        options={{
          title: MAIN,
          tabBarIcon: ({ focused }) => <Icon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name={PROFILE}
        component={ProfileScreen}
        options={{
          title: PROFILE,
          tabBarIcon: ({ focused }) => <Icon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name={CHAT}
        component={ChatScreen}
        options={{
          title: CHAT,
          tabBarIcon: ({ focused }) => <Icon focused={focused} name="md-map" />,
        }}
      />
    </BottomTab.Navigator>
  )
}

const Icon = ({focused, name}) =>
  <Ionicons
    name={name}
    size={30}
    style={{ marginBottom: -3 }}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
