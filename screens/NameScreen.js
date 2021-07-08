import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text, Image, Input } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';

const NameScreen = ({ navigation }) => {

    const [name, setName] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            title: '',
            headerLeft: () => (
                <View>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/images/backLeft.png')}
                            style={{ width: 24, height: 24, marginLeft: 10 }}
                        />
                    </TouchableOpacity>
                </View>
            ),
        })
    }, [navigation])



    return (
        <View style={styles.container}>
            <Text>Tên của tôi là</Text>
            <Input
                placeholder='Nhập tên của bạn'
                value={name}
                onChangeText={text => setName(text)}
            />
            <Text>Đây là cách tên được hiển thị trên PolyMatch và bạn không thể thay đổi được nó</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => { }}
            >
                <Text>Tiep Tuc</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
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
})
