import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default () => 
<View style={styles.container}>
  <Text style={styles.text}>
    MAIN SCREEN
  </Text>
</View>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  text:{
    color: 'white'
  }
})
  
