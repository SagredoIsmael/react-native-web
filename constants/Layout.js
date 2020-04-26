import { Dimensions, Platform, PixelRatio } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
}

const scale = width / 320

export const sizeNormalize = (size) => {
  const newSize = size * scale
  switch (Platform.OS) {
    case 'ios':
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
  
    case 'android':
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  
    case 'web':
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 100
  }
}