import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, View, StyleSheet, Image } from 'react-native'
import axios from "../../components/supportComponents/axios"
import { useDispatch,useSelector } from 'react-redux'


const SettingsScreen = ({ navigation }) => {

    const userInfo = useSelector(state => state.user.userInfo)
    const dispatch = useDispatch()
    const deleteProfile = () => {
		axios.delete(`/users/${userInfo._id}`)
        .then(res => {
            dispatch(userLogout())
        })
        .catch(err => {
            console.log(err)
        })
	}

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
                <View style={styles.changePassView}>
                    <Text style={styles.text}>Change Password</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={deleteProfile}>
                <View style={styles.deleteView}>
                    <Text style={styles.text}>Delete Account</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 10
    },
    changePassView: {
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#3B3D39',
        marginTop: 7,
        borderRadius: 10
    },
    deleteView: {
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#CB123E',
        marginTop: 7,
        borderRadius: 10
    },
    text: {
        fontSize: 18,
        color: 'white'
    }
})


export default SettingsScreen
