import * as React from 'react'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './navigation/Navigator'
import { View, StyleSheet } from 'react-native'


export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  const [initialNavigationState, setInitialNavigationState] = React.useState()
  const containerRef = React.useRef()

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        setInitialNavigationState(await getInitialState())
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setLoadingComplete(true)
      }
    }
    loadResourcesAndDataAsync()
  }, [])

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null
  } else {
    return (
      <View style={styles.container}>
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
         <Navigator/>
        </NavigationContainer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
