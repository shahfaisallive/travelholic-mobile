import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useSelector } from 'react-redux'
import axios, { imagePath } from "../../components/supportComponents/axios"

const ProfileScreen = ({navigation}) => {

	const [name,setName] = useState(" ")
	const [email,setEmail] = useState(" ")
	const [mobile_num,setNumber] = useState(" ")
	const [gender,setGender] = useState(" ")
	const [imageName,setImageName]=useState('default.jpg')

    useEffect(()=>{
        axios.get(`/users/${userInfo._id}`)
		.then((res)=>{
			setName(res.data.name)
			setEmail(res.data.email)
			setNumber(res.data.mobile_num)
			if (res.data.gender){
				setGender(res.data.gender)
			}
			setImageName(res.data.display_image_name)
		
		// //setImagePath(res.data.display_image_path)
	}).catch((err)=>{
		console.log(err)
	});
    },[])

    const userInfo = useSelector(state => state.user.userInfo)

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageView}>
                <Image source={{uri:`${imagePath}/users/${imageName}`}} accessibilityLabel={'Profile Image'} style={styles.image} />
            </View>

            <View style={styles.userInfoView}>
                <View style={styles.infoViewBox}>
                    <Text style={styles.userInfoHeading}>Name: </Text>
                    <Text style={styles.userInfoText}>{name}</Text>
                </View>
                <View style={styles.infoViewBox}>
                    <Text style={styles.userInfoHeading}>Email: </Text>
                    <Text style={styles.userInfoText}>{email}</Text>
                </View>
                <View style={styles.infoViewBox}>
                    <Text style={styles.userInfoHeading}>Mobile: </Text>
                    <Text style={styles.userInfoText}>{mobile_num}</Text>
                </View>
                {
                    gender =='' ?
                    <View style={styles.infoViewBox}>
                        <Text style={styles.userInfoHeading}>Gender: </Text>
                        <Text style={styles.userInfoText}>{gender}</Text>
                    </View>:
                    <></>
                }
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
