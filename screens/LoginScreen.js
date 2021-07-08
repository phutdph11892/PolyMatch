import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StatusBar } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native-elements'

const LoginScreen = ({ navigation }) => {

    const signIn = () => {
        navigation.navigate('NameScreen')
    }

    return (
        <View style={styles.container}>
            <StatusBar
                style='light' />
            <Image
                source={require('../assets/images/LogoText.png')}
                style={{ width: 304, height: 215, marginLeft: '12%' }}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={signIn}
            >
                <Text style={styles.text}> ĐĂNG NHẬP GMAIL FPT </Text>
            </TouchableOpacity>
            <Image
                source={require('../assets/images/FPT_Logo.png')}
                style={{ width: 150, height: 73 }}
            />
            <TouchableOpacity>
                <Text style={{ color: 'orange', fontSize: 15, fontWeight: '200' }}> Sự cố đăng nhập ? </Text>
            </TouchableOpacity>
        </View>

    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10
    },
    button: {
        borderWidth: 3,
        width: 300,
        height: 50,
        borderRadius: 20,
        borderColor: '#FF9200'
    },
    text: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        justifyContent: 'center',
        color: '#FF9200'
    },
    buttonErr: {
        color: 'orange'
    }

})
