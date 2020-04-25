import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default () => 
<View style={styles.container}>
  <Text style={styles.text}>
    PROFILE SCREEN
  </Text>
</View>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  text:{
    color: 'white'
  }
})
  