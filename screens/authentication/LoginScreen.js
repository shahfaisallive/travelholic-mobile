import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <View>
            <View style={styles.container}>
                <Image source={require("../../assets/images/logo.png")} style={styles.logo} />

                <Input
                    onChangeText={email => setEmail(email)} placeholder={'Email Address'}
                    leftIcon={<Icon name="email" size={20} color='grey' />} containerStyle={styles.input}
                    inputStyle={styles.inputStyle}
                />

                <Input
                    onChangeText={password => setPassword(password)} placeholder={'Password'}
                    leftIcon={<Icon name="lock" size={20} color='grey' />}
                    secureTextEntry={true} containerStyle={styles.input}
                    inputStyle={styles.inputStyle}
                />

                <Button title={'Login'} onPress={() => { }}
                    containerStyle={styles.loginBtnCont} buttonStyle={styles.loginBtn}
                    loading={false} />

                <Text style={styles.subText}>OR</Text>

                <Button title={'Sign in with Google'} onPress={() => { }}
                    containerStyle={styles.googleBtnCont} buttonStyle={styles.googleBtn}
                    loading={false}
                />

            </View>
            <View style={styles.bottomView}>
                <Text style={styles.subText}>Not Registered?</Text>
                <Button title={'Create new Account'} onPress={() => navigation.navigate('Register')}
                    containerStyle={styles.signUpCont} buttonStyle={styles.signUpBtn}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 60
    },
    logo: {
        width: 70,
        height: 70,
        marginBottom: 30
    },
    input: {
        width: '80%'
    },
    inputStyle: {
        fontSize: 17,
    },
    loginBtnCont: {
        width: '76%',
    },
    loginBtn: {
        backgroundColor: '#1A936F'
    },
    subText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#114B5F',
        marginTop: 10,
        marginBottom: 10
    },
    googleBtnCont: {
        width: '76%',
    },
    googleBtn: {
        backgroundColor: '#C43415'
    },
    bottomView: {
        alignItems: 'center',
        paddingTop: '35%'
    },
    signUpCont: {
        width: '76%',
    },
    signUpBtn: {
        backgroundColor: '#114B5F'
    },

})

export default LoginScreen
