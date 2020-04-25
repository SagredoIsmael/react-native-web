import { useLinking } from '@react-navigation/native'
import { Linking } from 'expo'
import { screens } from '../constants/navigation'

const { MAIN, PROFILE, CHAT } = screens

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      MAIN: {
        path: MAIN,
        screens: {
          Home: MAIN,
          Links: PROFILE,
          Settings: CHAT
        },
      },
    },
  })
}
