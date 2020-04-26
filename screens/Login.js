import * as React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { MAIN } from '../navigation/Navigator'

export default ({ navigation }) =>
  <View style={styles.container}>
    <Text style={styles.text}>
      LOGIN SCREEN
  </Text>
    <Button
      title="Go to next screen"
      onPress={() => navigation.navigate(MAIN)}
    />
  </View>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'black'
  }
})
