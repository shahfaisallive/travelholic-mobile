import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image,ToastAndroid } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { useSelector } from 'react-redux'
import axios from "../../components/supportComponents/axios"

const ChangePasswordScreen = () => {

    const [currentPassword, setCurrentPass] = useState('')
    const [newPassword, setNewPass] = useState('')
    const [newPasswordConfirm, setConfirmPass] = useState('')
    const [submitLoader, setSubmitLoader] = useState(false)
    const userInfo = useSelector(state => state.user.userInfo)

    const updatePassword = (e) => {
        setSubmitLoader(true)
		axios.put(`/users/password/${userInfo._id}`, { currentPassword, newPassword, newPasswordConfirm })
        .then(res => {
            ToastAndroid.show(
                'Password Updated',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM
            );
            setSubmitLoader(false)
        })
        .catch(err => {
            console.log(err)
            ToastAndroid.show(
                'Error',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM
            );
            setSubmitLoader(false)
        })
	}

    return (
        <View style={styles.container}>
            <Input
                label='Current Password' labelStyle={styles.inputlabel}
                onChangeText={currentPass => setCurrentPass(currentPass)}
                containerStyle={styles.input} inputStyle={styles.inputStyle}
                secureTextEntry={true}
            />

            <Input
                label='New Password' labelStyle={styles.inputlabel}
                onChangeText={newPass => setNewPass(newPass)}
                containerStyle={styles.input} inputStyle={styles.inputStyle}
                secureTextEntry={true}
            />

            <Input
                label='Confirm New Password' labelStyle={styles.inputlabel}
                onChangeText={confirmPass => setConfirmPass(confirmPass)}
                containerStyle={styles.input} inputStyle={styles.inputStyle}
                secureTextEntry={true}
            />

            <Button title='Change Password' onPress={updatePassword} buttonStyle={styles.updateBtn} loading={submitLoader ? true : false}/>
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
