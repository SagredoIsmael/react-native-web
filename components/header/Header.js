import React from 'react'
import { View, StyleSheet } from 'react-native'
import DrawerTrigger from './DrawerTrigger'
import colors from '../../constants/colors'

export default () => (
    <View style={styles.header}>
      <DrawerTrigger />
    </View>
  )

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    width: '100%',
    height: '8%'
  }
})
