import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useSelector } from 'react-redux'
// import axios, { imagePath } from "../../components/supportComponents/axios"

const ProfileScreen = ({navigation}) => {

    const userInfo = useSelector(state => state.user.userInfo)

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageView}>
                <Image source={require('../../assets/images/team-faisal.jpeg')} accessibilityLabel={'Profile Image'} style={styles.image} />
                <Button title='Change photo' onPress={() => { }} buttonStyle={styles.btn} />
            </View>

            <View style={styles.userInfoView}>
                <View style={styles.infoViewBox}>
                    <Text style={styles.userInfoHeading}>Name: </Text>
                    <Text style={styles.userInfoText}>{userInfo.name}</Text>
                </View>
                <View style={styles.infoViewBox}>
                    <Text style={styles.userInfoHeading}>Email: </Text>
                    <Text style={styles.userInfoText}>{userInfo.email}</Text>
                </View>
                <View style={styles.infoViewBox}>
                    <Text style={styles.userInfoHeading}>Phone: </Text>
                    <Text style={styles.userInfoText}>phone number to be imported</Text>
                </View>
            <Button title='Update Profile' onPress={() => navigation.navigate('UpdateProfile')} buttonStyle={styles.updateBtn} />

            </View>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 10
    },
    imageView: {
        alignItems: 'center',
        width: '100%',
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',

    },
    image: {
        width: '95%',
        height: 340,
        resizeMode: 'contain',
        borderColor: '#114B5F',
        borderWidth: 2,
    },
    btn: {
        backgroundColor: '#1A936F',
        marginTop: 10
    },
    updateBtn: {
        backgroundColor: '#114B5F',
        marginTop: 15
    },
    userInfoView: {
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10
    },
    userInfoHeading: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    userInfoText: {
        fontSize: 18
    },
    infoViewBox: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        marginHorizontal: 2,
        paddingHorizontal: 5,
        marginTop: 4,
        backgroundColor: 'white'
    }

})


export default ProfileScreen
