import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { useSelector } from 'react-redux'

const UpdateProfileScreen = () => {
    const userInfo = useSelector(state => state.user.userInfo)

    const [name, setName] = useState(userInfo.name)
    const [number, setNumber] = useState('')
    const [gender, setGender] = useState('')


    return (
        <View style={styles.container}>
            <Input
                label='Name' labelStyle={styles.inputlabel}
                onChangeText={name => setName(name)} value={name}
                containerStyle={styles.input} inputStyle={styles.inputStyle}
            />

            <Input
                label='Number' labelStyle={styles.inputlabel}
                onChangeText={number => setNumber(number)} value={number}
                containerStyle={styles.input} inputStyle={styles.inputStyle}
            />

            <Input
                label='Gender' labelStyle={styles.inputlabel}
                onChangeText={gender => setGender(gender)} value={gender}
                containerStyle={styles.input} inputStyle={styles.inputStyle}
            />

            <Button title='Update' onPress={() => { }} buttonStyle={styles.updateBtn} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 10
    },
    input: {
        width: '96%',
        alignSelf: 'center'
    },
    inputStyle: {
        fontSize: 16,
        backgroundColor: 'white',
        borderRadius: 4,
        paddingHorizontal: 5,
    },
    inputlabel: {
        color: '#114B5F'
    },
    updateBtn: {
        backgroundColor: '#114B5F',
        marginTop: 10,
        width: '92%',
        alignSelf: 'center'
    },

})


export default UpdateProfileScreen
