import * as React from 'react'
import Navigator from './src/navigation/Navigator'
import { YellowBox } from "react-native"
import { Provider } from 'react-redux'
import { configureStore } from './src/redux/configureStore'

export default () => {
    const store = configureStore()
    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    )
}


// ignore specific yellowbox warnings
YellowBox.ignoreWarnings(["Require cycle:"])
