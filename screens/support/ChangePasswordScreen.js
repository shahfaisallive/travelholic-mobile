import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Button, Input } from 'react-native-elements'

const ChangePasswordScreen = () => {

    const [currentPass, setCurrentPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    return (
        <View style={styles.container}>
            <Input
                label='Current Password' labelStyle={styles.inputlabel}
                onChangeText={currentPass => setCurrentPass(currentPass)}
                containerStyle={styles.input} inputStyle={styles.inputStyle}
            />

            <Input
                label='New Password' labelStyle={styles.inputlabel}
                onChangeText={newPass => setNewPass(newPass)}
                containerStyle={styles.input} inputStyle={styles.inputStyle}
            />

            <Input
                label='Confirm New Password' labelStyle={styles.inputlabel}
                onChangeText={confirmPass => setConfirmPass(confirmPass)}
                containerStyle={styles.input} inputStyle={styles.inputStyle}
            />

            <Button title='Change Password' onPress={() => { }} buttonStyle={styles.updateBtn} />
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
        alignSelf: 'center',
    },
    inputStyle: {
        fontSize: 16,
        backgroundColor: 'white',
        borderRadius: 4,
        paddingHorizontal: 5,
    },
    inputlabel: {
        color: '#114B5F',
        marginBottom: 5
    },
    updateBtn: {
        backgroundColor: '#114B5F',
        marginTop: 10,
        width: '92%',
        alignSelf: 'center'
    },
})


export default ChangePasswordScreen
