import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'


const RegisterScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    return (
        <View>
            <View>
                <ImageBackground source={require('../../assets/images/signupbg.jpg')} style={styles.bgImage} imageStyle={styles.bg} >
                    <View style={styles.container}>
                        <Input
                            onChangeText={firstName => setFirstName(firstName)} placeholder={'First Name'}
                            leftIcon={<Icon name="person" size={20} color='grey' />} containerStyle={styles.input}
                            inputStyle={styles.inputStyle}
                        />
                        <Input
                            onChangeText={lastName => setLastName(lastName)} placeholder={'Last Name'}
                            leftIcon={<Icon name="person" size={20} color='grey' />} containerStyle={styles.input}
                            inputStyle={styles.inputStyle}
                        />

                        <Input
                            onChangeText={email => setEmail(email)} placeholder={'Email Address'}
                            leftIcon={<Icon name="email" size={20} color='grey' />} containerStyle={styles.input}
                            inputStyle={styles.inputStyle}
                        />

                        <Input
                            onChangeText={phone => setPhone(phone)} placeholder={'Phone number'}
                            leftIcon={<Icon name="phone" size={20} color='grey' />} containerStyle={styles.input}
                            inputStyle={styles.inputStyle}
                        />

                        <Input
                            onChangeText={password => setPassword(password)} placeholder={'Password'}
                            leftIcon={<Icon name="lock" size={20} color='grey' />}
                            secureTextEntry={true} containerStyle={styles.input}
                            inputStyle={styles.inputStyle}
                        />

                        <Input
                            onChangeText={confirmPassword => setConfirmPassword(confirmPassword)} placeholder={'Confirm Password'}
                            leftIcon={<Icon name="lock" size={20} color='grey' />}
                            secureTextEntry={true} containerStyle={styles.input}
                            inputStyle={styles.inputStyle}
                        />

                        <Button title={'Sign up'} onPress={() => { }}
                            containerStyle={styles.signupBtnCont} buttonStyle={styles.signUpBtn}
                            loading={false} />

                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 50
    },
    bgImage: {
        width: '100%',
        height: '100%'
    },
    bg: {
        resizeMode: 'cover',
        opacity: 0.2
    },
    input: {
        width: '80%'
    },
    inputStyle: {
        fontSize: 16,
    },
    signupBtnCont: {
        width: '76%',
    },
    signUpBtn: {
        backgroundColor: '#114B5F'
    }
})

export default RegisterScreen
