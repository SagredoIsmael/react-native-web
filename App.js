import * as React from 'react'
import Navigator from './src/navigation/Navigator'
import { YellowBox } from "react-native"

export default () => <Navigator/>

// ignore specific yellowbox warnings
YellowBox.ignoreWarnings(["Require cycle:"])
