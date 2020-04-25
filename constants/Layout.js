import { Dimensions, Platform, PixelRatio }from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
}

const window = Dimensions.get('window')
const { width, height } = window

const scale = width / 320

export const sizeNormalize = (size) => {
  const newSize = size * scale
  if (Platform.OS === 'ios')
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  else
   return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
}