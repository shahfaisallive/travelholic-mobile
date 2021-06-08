import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'

const Feedback = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phoneNo, setPhoneNo] = useState()
    const [message, setMessage] = useState()

    return (
        <View>
            <ImageBackground source={require('../../assets/images/logo.png')} style={styles.bgImage} imageStyle={styles.bg} >
                <View style={styles.container}>
                    <Image source={require("../../assets/images/logo.png")} style={styles.logo} />

                    <Text style={styles.topText}>Drop us a message</Text>

                    <Input
                        onChangeText={name => setName(name)} placeholder={'Your Name'}
                        leftIcon={<Icon name="person" size={20} color='grey' />} containerStyle={styles.input}
                        inputStyle={styles.inputStyle}
                    />

                    <Input
                        onChangeText={email => setEmail(email)} placeholder={'Email Address'}
                        leftIcon={<Icon name="email" size={20} color='grey' />} containerStyle={styles.input}
                        inputStyle={styles.inputStyle}
                    />

                    <Input
                        onChangeText={phoneNo => setPhoneNo(phoneNo)} placeholder={'Phone number'}
                        leftIcon={<Icon name="phone" size={20} color='grey' />} containerStyle={styles.input}
                        inputStyle={styles.inputStyle}
                    />

                    <Input
                        onChangeText={message => setMessage(message)} placeholder={'Message'}
                        leftIcon={<Icon name="message" size={20} color='grey' />} containerStyle={styles.input}
                        inputStyle={styles.inputStyle}
                    />


                    <Button title={'Send Message'} onPress={() => { }}
                        containerStyle={styles.msgBtnCont} buttonStyle={styles.msgBtn}
                        loading={false} />

                </View>
            </ImageBackground>
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
    bgImage: {
        width: '100%',
        height: '100%'
    },
    bg: {
        resizeMode: 'cover',
        opacity: 0.2
    },
    topText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        width: '80%'
    },
    inputStyle: {
        fontSize: 17,
    },
    msgBtnCont: {
        width: '76%',
    },
    msgBtn: {
        backgroundColor: '#114B5F'
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

export default Feedback
