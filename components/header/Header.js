import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import DrawerTrigger from './DrawerTrigger'
import colors from '../../constants/colors'

export default () => {
  console.log("@@@@", StatusBar.currentHeight)
  return (
    <View style={styles.header}>
      <DrawerTrigger />
    </View>
  )

}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    marginTop: StatusBar.currentHeight,
    width: '100%',
    height: '8%'
  }
})
