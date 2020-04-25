import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import { MonoText } from '../components/UI/StyledText'

export default () => 
<View style={styles.container}>
  <MonoText style={styles.text}>
    MAIN SCREEN
  </MonoText>
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
  
