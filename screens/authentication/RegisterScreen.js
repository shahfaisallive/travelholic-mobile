import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, ToastAndroid,Platform} from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import axios from "../../components/supportComponents/axios";
import NetInfo from "@react-native-community/netinfo";
import { Alert } from 'react-native';


const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile_num, setMobileNum] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const signup = () =>{
        if (name == '' || email == '' || mobile_num=='' || password==''||confirmPassword==''){
            Alert.alert('Please Complete The Form')
        }
        else if (password!=confirmPassword) {
            Alert.alert('Password and Confirm Passwords Do Not Match')
        }
        else {
            NetInfo.fetch().then(state => {
                if (state.isConnected) {
                    axios.post('/users',{name,email,password,mobile_num})
                    .then(res=>{
                        console.log(res.data)
                        Alert.alert('You Have Been Registered, Please Check Your Email')
                        setName('')
                        setEmail('')
                        setMobileNum('')
                        setPassword('')
                        setConfirmPassword('')
                        navigation.navigate("Authenticate")
                    })
                    .catch(err=>{
                        console.log(err)
                        ToastAndroid.show(
                            'Error Occured',
                            ToastAndroid.LONG,
                            ToastAndroid.BOTTOM
                        );
                    })
                } else {
                    ToastAndroid.show(
                        `You don't have an Internet Connection`,
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM
                    );
                }
            });
        }
    }
    return (
        <View>
            <View>
                <ImageBackground source={require('../../assets/images/signupbg.jpg')} style={styles.bgImage} imageStyle={styles.bg} >
                    <View style={styles.container}>
                        <Input
                            onChangeText={name => setName(name)} placeholder={'Name'}
                            leftIcon={<Icon name="person" size={20} color='grey' />} containerStyle={styles.input}
                            inputStyle={styles.inputStyle}
                        />

                        <Input
                            onChangeText={email => setEmail(email)} placeholder={'Email Address'}
                            leftIcon={<Icon name="email" size={20} color='grey' />} containerStyle={styles.input}
                            inputStyle={styles.inputStyle}
                        />

                        <Input
                            onChangeText={mobile_num => setMobileNum(mobile_num)} placeholder={'Phone number'}
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

                        <Button title={'Sign up'} onPress={signup}
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
