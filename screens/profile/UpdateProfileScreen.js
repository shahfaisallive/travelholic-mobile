import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, ToastAndroid } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { useSelector } from 'react-redux'
import axios, { imagePath } from "../../components/supportComponents/axios"
import DropDownPicker from 'react-native-dropdown-picker';



const UpdateProfileScreen = () => {
    const userInfo = useSelector(state => state.user.userInfo)

    const [name,setName] = useState(" ")
	const [mobile_num,setNumber] = useState(" ")
	const [gender,setGender] = useState(" ")
    const [fromPickerOpen, setFromPickerOpen] = useState(false)
    const [genders, setGenders] = useState([
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' }
    ])
    const [updateLoader,setUpdateLoader]=useState(false)

    useEffect(()=>{
        axios.get(`/users/${userInfo._id}`)
		.then((res)=>{
			setName(res.data.name)
			
			setNumber(res.data.mobile_num)
			if (res.data.gender){
				setGender(res.data.gender)
			}
		
		// //setImagePath(res.data.display_image_path)
	}).catch((err)=>{
		console.log(err)
	});
    },[])

    const updateProfile = (e) =>{
        setUpdateLoader(true)
		axios.put(`/users/${userInfo._id}`,{name,gender,mobile_num})
		.then(res=>{
            setUpdateLoader(false)

            setName(res.data.name)
			
			setNumber(res.data.mobile_num)
			if (res.data.gender){
				setGender(res.data.gender)
			}
			ToastAndroid.show(
                'Profile Updated',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM
            );
		})
		.catch(err=>{
            setUpdateLoader(false)
			console.log(err)
		})
	}

    return (
        <View style={styles.container}>
            <Input
                label='Name' labelStyle={styles.inputlabel}
                onChangeText={name => setName(name)} value={name}
                containerStyle={styles.input} inputStyle={styles.inputStyle}
            />

            <Input
                label='Number' labelStyle={styles.inputlabel}
                onChangeText={number => setNumber(number)} value={mobile_num}
                containerStyle={styles.input} inputStyle={styles.inputStyle}
            />

            <DropDownPicker
                open={fromPickerOpen}
                value={gender}
                items={genders}
                setOpen={setFromPickerOpen}
                setValue={setGender}
                setItems={setGenders}
                containerStyle={styles.input}
                inputStyle={styles.pickerStyle}
                zIndex={10001}
                searchable={false}
                placeholder='Select Gender'
            />

            <Button loading={updateLoader} title='Update' onPress={updateProfile} buttonStyle={styles.updateBtn} />
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
    pickerStyle: {
        width: '90%',
        marginTop: 10
    }

})


export default UpdateProfileScreen
