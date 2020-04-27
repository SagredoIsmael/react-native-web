import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { sizeNormalize } from '../../constants/layout'
import colors from '../../constants/colors'
import { useNavigation } from '@react-navigation/native'

export default () => {
    const navigation = useNavigation()
    return (
        <View>
            <TouchableOpacity style={styles.container}
                onPress={() => navigation.toggleDrawer()}>
                <Icon
                    name={'md-menu'}
                    size={sizeNormalize(27)}
                    color={colors.third} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '12%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


